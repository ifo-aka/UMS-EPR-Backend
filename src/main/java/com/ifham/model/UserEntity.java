package com.ifham.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
@Entity




@Table(name = "users")
public class UserEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long user_id;
    @Column (nullable = false ,name = "username")
    @NotBlank(message =  "name must not be blank")
    @Pattern(
            regexp = "^[A-Z][a-z]{2,}(\\s[A-Z][a-z]{2,})?$",
            message = "Name must start with uppercase and can contain first and last name, each at least 3 letters"
    )
    private String username;
    @Email(message = "email  must be valid")
    @NotBlank(message = "Email is required.")
    @Column (nullable = false,unique = true)
    private String email ;

    @Column (nullable = false)

    @NotBlank(message = "Password is required")
    @Size(min = 5, message = "Password must be at least 5 characters long")
    @Pattern(
            regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,}$",
            message = "Password must have at least one digit, one lowercase letter, and one uppercase letter"
    )
    private  String password;

    private  String role = "USER";

    public UserEntity(long id, String username, String email, String password, String role) {
        this.user_id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    public UserEntity() {
    }


}
