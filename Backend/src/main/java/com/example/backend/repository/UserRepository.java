package com.example.backend.repository;

import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // Fixes the "Cannot resolve method findByEmail" error
    Optional<User> findByEmail(String email);

    // Fixes the "Cannot resolve method existsByEmail" error
    boolean existsByEmail(String email);
}