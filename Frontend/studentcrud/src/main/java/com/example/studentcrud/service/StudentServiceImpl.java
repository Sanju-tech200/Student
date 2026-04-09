package com.example.studentcrud.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.studentcrud.entity.Student;
import com.example.studentcrud.repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repository;

    public StudentServiceImpl(StudentRepository repository) {
        this.repository = repository;
    }

    @Override
    public Student saveStudent(Student student) {
        return repository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    @Override
    public Student getStudentById(int id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    @Override
    public Student updateStudent(int id, Student student) {

        Student existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));

        existing.setName(student.getName());
        existing.setAge(student.getAge());
        existing.setEmail(student.getEmail());

        return repository.save(existing);
    }

    @Override
    public void deleteStudent(int id) {
        repository.deleteById(id);
    }

    // ✅ DELETE ALL
    @Override
    public void deleteAllStudents() {
        repository.deleteAll();
    }
}