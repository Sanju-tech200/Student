package com.example.studentcrud.service;

import java.util.List;
import com.example.studentcrud.entity.Student;

public interface StudentService {

    Student saveStudent(Student student);

    List<Student> getAllStudents();

    Student getStudentById(int id);

    Student updateStudent(int id, Student student);

    void deleteStudent(int id);

    void deleteAllStudents(); // ✅ important
}