package com.ifham.DTO;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StudentDTO {
    private long id;
    private String name;
    private String  email;
    private String profilePicUrl;

    public StudentDTO(long id, String name ,String  email) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.profilePicUrl = profilePicUrl;
    }

}






