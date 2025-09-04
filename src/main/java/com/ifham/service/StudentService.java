package com.ifham.service;

import com.ifham.customException.StudentNotFoundException;
import com.ifham.model.StudentDetail;
import com.ifham.DTO.StudentDTO;
import com.ifham.model.UserEntity;
import com.ifham.pagination.StudentPageResponse;
import com.ifham.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.UUID;

@Service
public class StudentService {

   @Autowired
   private StudentRepository repository;

    @Value("${file.upload-dir}")
    private String uploadDir;
    public File file = new File("/");
    public boolean saveStudentDetail(UserEntity entity, StudentDetail detail,
                                    MultipartFile domicile,
                                    MultipartFile matric,
                                    MultipartFile inter
                                           ) throws IOException {

        if (domicile != null && !domicile.isEmpty()) {
            System.out.println(domicile!= null && ! domicile.isEmpty());
            String path = saveFile(domicile);
            detail.setDomicile_url(path);
            System.out.println(path);
        }

        if (matric != null && !matric.isEmpty()) {
            String path = saveFile(matric);
            detail.setMetricCertificate_url(path);
        }

        if (inter != null && !inter.isEmpty()) {
            String path = saveFile(inter);
            detail.setInterCertificate_url(path);
        }


      detail.setUserEntity(entity);
//        detail.setUser_id(id);
      StudentDetail detail1=   repository.save(detail);
        if(!((detail1.getStudentId()) == 0)){
            return true;
        }
        return false;
    }

    private String saveFile(MultipartFile file) throws IOException {
        String fileName = UUID.randomUUID() + "_" + file.getOriginalFilename();
        Path filePath = Paths.get(uploadDir, fileName);
        System.out.println(filePath);
        Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
        return "/uploads/" + fileName; // you’ll serve this via static resource mapping
    }

    public List<StudentDetail> getAllStudents() {
        return repository.findAll();
    }

    public StudentDetail getStudentById(long id) {
        return repository.findById(id).orElseThrow(()->  new StudentNotFoundException("student with id "+ id+ " not found."));
    }

    public StudentDetail updateStudent(int id, StudentDetail updatedStudent) {
        StudentDetail existing = getStudentById(id);
        existing.setFullName(updatedStudent.getFullName());
        existing.setDob(updatedStudent.getDob());


        return repository.save(existing);




    }

    public void deleteStudent(int id) {
        StudentDetail remove = getStudentById(id);
        repository.delete(remove);

    }
    public long getStudentCount(){
      return   repository.count();

    }

    public StudentPageResponse getStudentsWithPagination(Pageable pageable) {
        Page<StudentDetail> pageContent = repository.findAll(pageable);

        List<StudentDTO> studentDTOS = pageContent.getContent()
                .stream().map(student -> new StudentDTO( student.getStudentId(),student.getFullName(),student.getDomicile_url()))
                .toList();
        StudentPageResponse response = new StudentPageResponse();

        response.setStudentList(studentDTOS);
        response.setCurrentPage(pageContent.getNumber());
        response.setTotalPages(pageContent.getTotalPages());
        response.setTotalElements(pageContent.getTotalElements());
        return response;
    }
    public List<StudentDetail> searchStudents(String filterType, String value) {
        switch (filterType.toLowerCase()) {
            case "id":
                try {
                    long id = Integer.parseInt(value);
                    return repository.findById(id).map(List::of).orElse(List.of());
                } catch (NumberFormatException e) {
                    return List.of(); // invalid id input
                }
            case "name":
//                return repository.findByNameContainingIgnoreCase(value);
            case "department":
//                return repository.findByDepartmentContainingIgnoreCase(value);
            default:
                return List.of(); // empty list for unsupported filter
        }
    }
}