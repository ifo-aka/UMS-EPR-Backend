package com.ifham.service;

import com.ifham.DTO.DomicileData;
import com.ifham.DTO.InterDmcData;
import com.ifham.DTO.MetricDmcData;
import net.sourceforge.tess4j.ITesseract;
import net.sourceforge.tess4j.Tesseract;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class VisionService {

    private final ITesseract tesseract;

    public VisionService() {
        this.tesseract = new Tesseract();
        this.tesseract.setDatapath("tessdata"); // path to trained data folder
        this.tesseract.setLanguage("eng");
    }

    public Map<String, Object> process(Map<String, MultipartFile> data) {
        Map<String, Object> parsed = new HashMap<>();

        try {
            parseAndPut(data.get("domicile_Data"), "domicile-", parsed, "parsedDomicile");
            parseAndPutDmc(data.get("metric_Certificate"), "metricDmc-", parsed, "parsedMetricDmc", true);
            parseAndPutDmc(data.get("inter_Certificate"), "interDmc-", parsed, "parsedInterDmc", false);
        } catch (Exception e) {
            throw new RuntimeException("Error processing OCR", e);
        }

        return parsed;
    }

    private void parseAndPut(MultipartFile file, String prefix, Map<String, Object> parsed, String key) throws Exception {
        if (file != null && !file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            String ext = fileName.substring(fileName.lastIndexOf(".") + 1);
            File tmp = File.createTempFile(prefix, "." + ext);
            file.transferTo(tmp);

            String text = tesseract.doOCR(tmp);
            parsed.put(key, parseDomicile(text));

            tmp.deleteOnExit();
        }
    }

    private void parseAndPutDmc(MultipartFile file, String prefix, Map<String, Object> parsed, String key, boolean isMetric) throws Exception {
        if (file != null && !file.isEmpty()) {
            String fileName = file.getOriginalFilename();
            String ext = fileName.substring(fileName.lastIndexOf(".") + 1);
            File tmp = File.createTempFile(prefix, "." + ext);
            file.transferTo(tmp);


            String text = tesseract.doOCR(tmp);
            Map<String, String> dmcData = parseDmc(text);

            if (isMetric) {
                parsed.put(key, new MetricDmcData(
                        dmcData.get("rollNo"),
                        dmcData.get("name"),
                        dmcData.get("fatherName"),
                        dmcData.get("enrolmentNo"),
                        dmcData.get("marksObtained"),
                        dmcData.get("grade"),
                        dmcData.get("dob")
                ));
            } else {
                parsed.put(key, new InterDmcData(
                        dmcData.get("rollNo"),
                        dmcData.get("name"),
                        dmcData.get("fatherName"),
                        dmcData.get("enrolmentNo"),
                        dmcData.get("marksObtained"),
                        dmcData.get("grade"),
                        dmcData.get("dob")
                ));
            }

            tmp.deleteOnExit();
        }
    }

    private Map<String, String> parseDmc(String text) {
        Map<String, String> out = new HashMap<>();

        String cleaned = text.replaceAll("\\s+", " ").toUpperCase();
        // Capture Roll No from header or body
        System.out.println(cleaned);
        String roll = firstMatch(cleaned, new String[]{
                "ROLL\\s*NO\\.?\\s*[:\\-]?\\s*([0-9]{3,10})",   // standard format
                "\\bROLL\\s*NO\\.?\\s*([0-9]{3,10})",          // loose format
                "ROLLNO\\s*[:\\-]?\\s*([0-9]{3,10})"           // OCR sometimes merges
        });


        // Roll No
//        matchAndPut(out, "rollNo", "ROLL NO\\.?\\s*[:\\-]?\\s*([0-9A-Z]+)", roll);
   out.put("rollNo", roll);
        // Candidate Name
        matchAndPut(out, "name", "CERTIFY THAT\\s+([A-Z ]{3,50})", cleaned);

        // Father Name
        matchAndPut(out, "fatherName", "(SON OF|S/O)\\s+([A-Z ]{3,50})", cleaned, 2);

        // Enrolment No
        matchAndPut(out, "enrolmentNo", "ENROLMENT NO\\.?\\s*([0-9]{6,15})", cleaned);

        // Marks
        Pattern marks = Pattern.compile("OBTAINED\\s+(\\d{2,4})\\s+MARKS\\s+OUT\\s+OF\\s+(\\d{2,4})", Pattern.CASE_INSENSITIVE);
        Matcher m = marks.matcher(cleaned);
        if (m.find()) {
            out.put("marksObtained", m.group(1));
            out.put("marksTotal", m.group(2));
        }

        // Grade
        String grade = firstMatch(cleaned, new String[]{
                "GRADE-?([A-Z])",
                "GRADE\\s*[-:]?\\s*([A-Z])\\s+REPRESENTING\\s+[A-Z]+",
                "PLACED\\s+IN\\s+GRADE\\s*[-:]?\\s*([A-Z])"
        });

//        matchAndPut(out, "grade", "GRADE-?([A-Z])", cleaned);
        out.put("grade",grade);

        // Date of Birth
        matchAndPut(out, "dob", "(\\d{2}-\\d{2}-\\d{4})", cleaned);

        // Normalize names (remove stray letters like "el", "R")
        out.computeIfPresent("name", (k, v) -> normalizeName(v));
        out.computeIfPresent("fatherName", (k, v) -> normalizeName(v));

        return out;
    }


    private String firstMatch(String text, String[] regexes) {
        for (String r : regexes) {
            Pattern p = Pattern.compile(r, Pattern.CASE_INSENSITIVE | Pattern.DOTALL);
            Matcher m = p.matcher(text);
            if (m.find()) {
                return cleanOcrText(m.group(1).trim());
            }
        }
        return null;
    }

    private DomicileData parseDomicile(String text) {
        DomicileData data = new DomicileData();

        // Clean base text
        String cleaned = text.replaceAll("\\s+", " ").toUpperCase();

        data.setName(matchOne("NAME\\s*:?\\s*([A-Z ]+)", cleaned));
        data.setFatherName(matchOne("(SON OF|S/O)\\s*:?\\s*([A-Z ]+)", cleaned, 2));
        data.setCnic(matchOne("(\\d{5}[- ]\\d{7}[- ]\\d)", cleaned));
        data.setVillage(matchOne("VILLAGE.*?([A-Z0-9 /]+) TEHSIL", cleaned));
        data.setTehsil(matchOne("TEHSIL\\s*:?\\s*([A-Z ]+)", cleaned));
        data.setDistrict(matchOne("DISTRICT\\s*:?\\s*([A-Z ]+)", cleaned));
        data.setCertificateNo(matchOne("S\\.NO\\.?\\s*([0-9]+)", cleaned));
        data.setDeclarationDate(matchOne("DECLARATION DATE\\s*:?\\s*([0-9\\-/]+)", cleaned));
        data.setIssueDate(matchOne("DATE\\s*:?\\s*([0-9\\-/]+)", cleaned));

        return data;
    }

    private String matchOne(String regex, String text) {
        return matchOne(regex, text, 1);
    }

    private String matchOne(String regex, String text, int group) {
        Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE | Pattern.DOTALL);
        Matcher m = p.matcher(text);
        return m.find() ? cleanOcrText(m.group(group).trim()) : null;
    }

    private void matchAndPut(Map<String, String> map, String key, String regex, String text) {
        matchAndPut(map, key, regex, text, 1);
    }

    private void matchAndPut(Map<String, String> map, String key, String regex, String text, int group) {
        Pattern p = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
        Matcher m = p.matcher(text);
        if (m.find()) {
            map.put(key, cleanOcrText(m.group(group).trim()));
        }
    }
    private String cleanOcrText(String input) {
        if (input == null) return null;

        // Remove any trailing single letters or symbols
        String newText = input.replaceAll("\\b([A-Za-z])$", "")  // trailing lonely letters
                .replaceAll("[^A-Za-z0-9\\s\\-]", "") // weird non-alphanumeric
                .trim()
                .replaceAll("\\s{2,}", " ");
//        if(newText.contains(" el") || newText.contains(" R")){
//            return newText.split(" el")[1];
//        }
        // normalize spaces
        return newText;
    }
    private String normalizeName(String name) {
        if (name == null) return null;
        return name.replaceAll("\\b(EL|R)\\b", "").replaceAll("\\s{2,}", " ").trim();
    }

}
