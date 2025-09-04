package com.ifham.DTO;

public class DomicileData {
    private String name;
    private String fatherName;
    private String cnic;
    private String village;
    private String tehsil;
    private String district;
    private String issueDate;
    private String declarationDate;
    private String certificateNo;

    // Getters and Setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getFatherName() { return fatherName; }
    public void setFatherName(String fatherName) { this.fatherName = fatherName; }

    public String getCnic() { return cnic; }
    public void setCnic(String cnic) { this.cnic = cnic; }

    public String getVillage() { return village; }
    public void setVillage(String village) { this.village = village; }

    public String getTehsil() { return tehsil; }
    public void setTehsil(String tehsil) { this.tehsil = tehsil; }

    public String getDistrict() { return district; }
    public void setDistrict(String district) { this.district = district; }

    public String getIssueDate() { return issueDate; }
    public void setIssueDate(String issueDate) { this.issueDate = issueDate; }

    public String getDeclarationDate() { return declarationDate; }
    public void setDeclarationDate(String declarationDate) { this.declarationDate = declarationDate; }

    public String getCertificateNo() { return certificateNo; }
    public void setCertificateNo(String certificateNo) { this.certificateNo = certificateNo; }
}
