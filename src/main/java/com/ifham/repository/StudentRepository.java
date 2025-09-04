package com.ifham.repository;


import com.ifham.model.StudentDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository  extends JpaRepository<StudentDetail,Long> {
//    List<StudentDetail> findByNameContainingIgnoreCase(String fullName);
//    List<StudentDetail> findByDepartmentContainingIgnoreCase(String department);

}
