package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000") // Required for React connection
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // 1. POST /api/auth/register
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return "Error: Email already exists!";
        }
        user.setPassword(passwordEncoder.encode(user.getPassword())); // BCrypt encryption
        userRepository.save(user);
        return "User registered successfully!";
    }

    // 2. POST /api/auth/login
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Optional<User> foundUser = userRepository.findByEmail(user.getEmail());
        if (foundUser.isPresent() && passwordEncoder.matches(user.getPassword(), foundUser.get().getPassword())) {
            return "Login successful!";
        }
        return "Error: Invalid credentials.";
    }

    // 3. GET /api/auth/me (Protected placeholder for Session 1)
    @GetMapping("/me")
    public String me() {
        return "Session 1 Backend: Authenticated!";
    }
}