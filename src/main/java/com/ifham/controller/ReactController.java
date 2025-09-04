package com.ifham.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {

    @RequestMapping(value = {"/", "/dashboard", "/users/**"})
    public String index() {
        // Spring Boot will serve index.html from /static folder
        return "index.html";
    }
}
