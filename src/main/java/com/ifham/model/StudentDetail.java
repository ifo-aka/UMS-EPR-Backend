package com.ifham.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "student_details")
public class StudentDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private long studentId;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private UserEntity userEntity ;

    @NotBlank(message = "Full name is required")
    @Column(name = "full_name")
    private String fullName;

    @NotBlank(message = "Father name is required")
    @Column(name = "father_name")
    private String fatherName;

    @NotNull(message = "Date of birth is required")
    private java.sql.Date dob;

    @NotBlank(message = "CNIC cannot be blank")
    @Pattern(regexp = "^[0-9]{13}$", message = "CNIC must be exactly 13 digits")
    @Column(name =  "cnic")
    private String cnic;


    @Column(name =  "domicile_url")
    private  String domicile_url ;


    @Enumerated(EnumType.STRING)

    private Gender gender;

    @NotBlank(message = "Phone number is required")
    @Column(name = "phone")
    private String phone;
    @Nullable


    // Matric
    @Column(name = "matric_roll")
    private String metricRoll;
    @Column(name = "matric_board")
    private String metricBoard;
    @Column(name = "matric_year")
    private int metricYear;
    @Column(name = "matric_marks")
    private String metricMarks;
    @Column(name = "matric_certificate_url")
    private String metricCertificate_url; // path or base64

    // Intermediate
    @Column(name = "inter_roll")
    private String interRoll;
    @Column(name = "inter_board")
    private String interBoard;
    @Column(name = "inter_year")
    private int interYear;
    @Column(name = "inter_marks")
    private String interMarks;
    @Column(name = "inter_certificate_url")
    private String interCertificate_url; // path or base64

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Program program;

    private boolean hostel;
    private boolean transport;
    private boolean scholarship;

    public enum Gender {
        MALE, FEMALE
    }

    public enum Program {
        BS_CS, BBA, BS_ENGLISH, BS_PHYSICS
    }
}
