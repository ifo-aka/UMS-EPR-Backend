package com.ifham.controller;

import com.ifham.model.ApiResponse;

import com.ifham.model.StudentDetail;
import com.ifham.pagination.StudentPageResponse;
import com.ifham.service.StudentService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@Validated
public class StudentController {

    @Autowired
    StudentService service;

    // Create


//    // Get All
//    @GetMapping("/departments/count")
//    public ApiResponse<Integer> getAllStudents() {
//        List<StudentDetail> list = service.getAllStudents();
//        int departcount = (int) list.stream().map(StudentDetail::getDepartment).distinct().count();
//        return new ApiResponse<>(true,"student list fetched successfully",departcount);
//    }

    // Get by ID
    @GetMapping("/{id}")
    public ApiResponse<StudentDetail> getStudentById(@PathVariable int id) {

        return new ApiResponse<>(true,"student found with id",service.getStudentById(id));
    }

    // Update
    @PutMapping("/{id}")
    public ApiResponse<StudentDetail> updateStudentById(@PathVariable int id, @RequestBody @Valid StudentDetail student) {

        return new ApiResponse<>(true,"required student with id "+ id+" is updated successfully ",student);
    }

    // Delete
    @DeleteMapping("/{id}")
    public ApiResponse<String> deleteStudent(@PathVariable int id) {
             service.deleteStudent(id);
        return new ApiResponse<>(true,"delete was successful","");
    }

    // Count
    @GetMapping("/count")
    public ApiResponse<Long> totalStudents() {
        return new ApiResponse<>(true,"fetched total count",service.getStudentCount());
    }
    @GetMapping("/students")
    public ApiResponse<StudentPageResponse> getStudentsPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy
    ) {
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        StudentPageResponse pageContent = service.getStudentsWithPagination(pageable);

       return new ApiResponse<>(true,"student fetched using pagination ",pageContent);
    }

    // Search / Filter Students
    @GetMapping("/search")
    public ApiResponse<List<StudentDetail>> searchStudents(
            @RequestParam String filterType,   // id, name, department
            @RequestParam String value         // search value
    ) {
        List<StudentDetail> results = service.searchStudents(filterType, value);
        return new ApiResponse<>(true, "students fetched using filter: " + filterType, results);
    }


}
