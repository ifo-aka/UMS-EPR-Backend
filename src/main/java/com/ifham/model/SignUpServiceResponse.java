package com.ifham.model;



public class SignUpServiceResponse {
   private UserEntity entity;
   private String token;
    public  SignUpServiceResponse(UserEntity entity, String token){
        this.entity=entity;
        this.token=token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public UserEntity getEntity() {
        return entity;
    }

    public void setEntity(UserEntity entity) {
        this.entity = entity;
    }
}
