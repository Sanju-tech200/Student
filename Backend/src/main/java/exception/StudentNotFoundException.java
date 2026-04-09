package com.example.studentcrud.exception;

public class StudentNotFoundException extends RuntimeException {

    public StudentNotFoundException(Integer id) {
        super("Student not found with id: " + id);
    }
}