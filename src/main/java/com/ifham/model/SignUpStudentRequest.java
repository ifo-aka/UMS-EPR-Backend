package com.ifham.model;

import jakarta.validation.Valid;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignUpStudentRequest {
    @Valid
    UserEntity user ;
    @Valid
    StudentDetail studentDetail;
}
