//package com.example.studentcrud.controller;
//
//import java.util.List;
//
//import org.springframework.web.bind.annotation.*;
//
//import com.example.studentcrud.entity.Student;
//import com.example.studentcrud.service.StudentService;
//
//@CrossOrigin(origins = "https://studentcrud-593c7.web.app")
//@RestController
//@RequestMapping("/")
//public class StudentController {
//
//    private final StudentService service;
//
//    public StudentController(StudentService service) {
//        this.service = service;
//    }
//
//    @PostMapping
//    public Student addStudent(@RequestBody Student s) {
//        return service.saveStudent(s);
//    }
//
//    @GetMapping
//    public List<Student> getAll() {
//        return service.getAllStudents();
//    }
//
//    @GetMapping("/{id}")
//    public Student getById(@PathVariable int id) {
//        return service.getStudentById(id);
//    }
//
//    @PutMapping("/{id}")
//    public Student update(@PathVariable int id, @RequestBody Student s) {
//        return service.updateStudent(id, s);
//    }
//
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable int id) {
//        service.deleteStudent(id);
//    }
//
//    @DeleteMapping
//    public void deleteAll() {
//        service.deleteAllStudents();
//    }
//}

package com.example.studentcrud.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.studentcrud.entity.Student;
import com.example.studentcrud.service.StudentService;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @PostMapping
    public Student addStudent(@RequestBody Student s) {
        return service.saveStudent(s);
    }

    @GetMapping
    public List<Student> getAll() {
        return service.getAllStudents();
    }

    @GetMapping("/{id}")
    public Student getById(@PathVariable int id) {
        return service.getStudentById(id);
    }

    @PutMapping("/{id}")
    public Student update(@PathVariable int id, @RequestBody Student s) {
        return service.updateStudent(id, s);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        service.deleteStudent(id);
    }

    @DeleteMapping
    public void deleteAll() {
        service.deleteAllStudents();
    }
}