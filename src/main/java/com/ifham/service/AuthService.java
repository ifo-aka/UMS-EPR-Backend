package com.ifham.service;

import com.ifham.DTO.LoginRequest;
import com.ifham.DTO.UserDto;
import com.ifham.customException.UserNotFoundException;
import com.ifham.customException.WrongPasswordException;
import com.ifham.model.SignUpServiceResponse;
import com.ifham.model.StudentDetail;
import com.ifham.model.UserEntity;
import com.ifham.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final StudentService studentService;
    private final PasswordEncoder encoder;
    private final JwtService jwtService;

    @Transactional
    public SignUpServiceResponse signupStudent(UserEntity user,
                                               StudentDetail studentDetail,
                                               MultipartFile domicile,
                                               MultipartFile matric,
                                               MultipartFile inter) throws IOException {
        user.setPassword(encoder.encode(user.getPassword()));
        UserEntity saved = userRepository.save(user);

        boolean status = studentService.saveStudentDetail(saved, studentDetail,
                domicile, matric, inter);
        if (!status) {
            throw new RuntimeException("Failed to save student details");
        }

        Map<String, Object> claims = Map.of(
                "role", saved.getRole(),
                "uid", saved.getUser_id(),
                "username", saved.getUsername()
        );

        String token = jwtService.generateToken(
                org.springframework.security.core.userdetails.User
                        .withUsername(saved.getEmail())
                        .password(saved.getPassword())
                        .authorities("ROLE_" + saved.getRole())
                        .build(),
                claims
        );

        return new SignUpServiceResponse(saved, token);
    }

    public  UserDto signup(UserEntity user) throws IOException {
        user.setPassword(encoder.encode(user.getPassword()));
        UserEntity saved = userRepository.save(user);


        // build token with some claims (e.g., role, id, username)
        Map<String, Object> claims = Map.of(
                "role", saved.getRole(),
                "uid", saved.getUser_id(),
                "username", saved.getUsername()
        );

        String token = jwtService.generateToken(
                org.springframework.security.core.userdetails.User
                        .withUsername(saved.getEmail())
                        .password(saved.getPassword())
                        .authorities("ROLE_" + saved.getRole())
                        .build(),
                claims
        );
       userRepository.save(user);

        return  new UserDto(saved.getUser_id(),saved.getUsername(),saved.getEmail(),saved.getRole(),token);


    }





    public List<UserDto> getAllUser() {
        List<UserEntity> list = userRepository.findAll();
        return list.stream()
                .map(userEntity -> new UserDto(userEntity.getUser_id(),
                        userEntity.getUsername(),
                        userEntity.getEmail(),
                        userEntity.getRole()))
                .toList();
    }

    public UserDto login(LoginRequest request) {


        UserEntity user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UserNotFoundException("user not found"));

        if (!encoder.matches(request.getPassword(), user.getPassword())) {
            throw new WrongPasswordException("Wrong password.Please check you password and try again");
        }


        // build token with some claims (e.g., role, id, username)
        Map<String, Object> claims = Map.of(
                "role", user.getRole(),
                "uid", user.getUser_id(),
                "username", user.getUsername()
        );

        String token = jwtService.generateToken(
                org.springframework.security.core.userdetails.User
                        .withUsername(user.getEmail())
                        .password(user.getPassword())
                        .authorities("ROLE_" + user.getRole())
                        .build(),
                claims
        );

        return new UserDto(user.getUser_id(), user.getUsername(), user.getEmail(), user.getRole(), token);
    }
    public  void removeUser(long id){
        userRepository.deleteById(id);
    }
}
