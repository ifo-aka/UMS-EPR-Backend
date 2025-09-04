package com.ifham.controller;

import com.ifham.DTO.*;
import com.ifham.model.*;
import com.ifham.service.AuthService;
import com.ifham.service.StudentService;
import com.ifham.service.VisionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;
    private  final StudentService studentService;
    private  final VisionService visionService;

    @PostMapping(value = "/api/submitdocs",consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<DocsDTA>  fetchDocsData(
            @RequestPart("domicile") MultipartFile domicile_Data,
            @RequestPart ("metric") MultipartFile metric_Certificate,
            @RequestPart ("inter") MultipartFile inter_Certificate
            ) throws Exception {
        Map<String,MultipartFile> data = new HashMap<>();
        data.put("domicile_Data",domicile_Data);
        data.put("metric_Certificate", metric_Certificate);
        data.put("inter_Certificate",inter_Certificate);

       Map<String,Object> processedData=  visionService.process(data);
       DocsDTA docsDTA = new DocsDTA();
       docsDTA.setDomicileData((DomicileData) processedData.get("parsedDomicile"));
       docsDTA.setMetricDmcData((MetricDmcData) processedData.get("parsedMetricDmc"));
       docsDTA.setInterDmcData((InterDmcData) processedData.get("parsedInterDmc"));

       return  new ApiResponse<>(true,"OCR fetched data successfully", docsDTA);
    }


    @PostMapping("/signup/user")
    public ApiResponse<UserDto> signup(@RequestBody @Valid UserEntity user) throws IOException {
        return new ApiResponse<>(true,"signed up successfully", service.signup(user));
    }


    @PostMapping(value = "/signup/student", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ApiResponse<UserDto> signupStudent(
            @RequestPart("user") @Valid UserEntity user,
            @RequestPart("studentDetail") @Valid StudentDetail studentDetail,
            @RequestPart(value = "domicile", required = false) MultipartFile domicile,
            @RequestPart(value = "matricCertificate", required = false) MultipartFile matricCertificate,
            @RequestPart(value = "interCertificate", required = false) MultipartFile interCertificate
    ) throws Exception {
        SignUpServiceResponse obj = service.signupStudent(user, studentDetail,
                domicile, matricCertificate, interCertificate);
        UserEntity entity = obj.getEntity();

//        Map<String,Object> vision =   visionService.process(matricCertificate);
//        System.out.println(vision.get("parsed"));
//        System.out.println(vision.get("fullText"));

        return new ApiResponse<>(true, "success",
                new UserDto(entity.getUser_id(), entity.getUsername(),
                        entity.getEmail(), entity.getRole(), obj.getToken()));
    }

    @GetMapping
    public ApiResponse<List<UserDto>> getAllUser(){
        List<UserDto> list = service.getAllUser();
        return  new ApiResponse<>(true,"users fetched successfully.",list);
    }
    @PostMapping("/login")
    public ApiResponse<UserDto> login(@RequestBody LoginRequest request) {
        UserDto dto = service.login(request);
        return new ApiResponse<>(true, "login successful", dto);
    }
    @GetMapping("/check")
    public ApiResponse<Map<String,Object>> check() {
        Authentication a = SecurityContextHolder.getContext().getAuthentication();
        boolean ok = a != null && a.isAuthenticated();
        return new ApiResponse<>(ok, ok ? "authenticated" : "not authenticated",
                Map.of("principal", a != null ? a.getName() : null));
    }

}
