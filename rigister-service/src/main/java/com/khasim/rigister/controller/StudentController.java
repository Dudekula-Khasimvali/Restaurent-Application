package com.khasim.rigister.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.khasim.rigister.entity.Student;
import com.khasim.rigister.exception.ResourceNotFoundException;
import com.khasim.rigister.model.StudentDetails;
import com.khasim.rigister.service.StudentService;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("/api")
public class StudentController {
	
	@Autowired
	StudentService studentService;
	
	@PostMapping("/create")
	public Student createStudent(@RequestBody StudentDetails studentDetails)
	{
		return studentService.createStudent(studentDetails);
	}
	
	@GetMapping("/get")
	public List<Student> getStudent()
	{
		return studentService.getStudent();
	}
	
	@GetMapping("/getByid/{id}")
	public Student getByid(@PathVariable long id)
	{
		return studentService.getByid(id);
	}
	
	@GetMapping("/getByemail/{email}")
	public Student getByEmaile(@PathVariable String email)
	{
		return studentService.getByEmail(email);
	}
	
	@PutMapping("/update/{id}")
    public ResponseEntity<Student> updateResource(@PathVariable Long id, @RequestBody StudentDetails updatedResource) {
        try {
            // Call your service method to update the resource
            Student updated = studentService.updateResource(id, updatedResource);
            return ResponseEntity.ok(updated);
        } catch (ResourceNotFoundException e) {
            // Handle the case where the resource with the specified ID is not found
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        } catch (Exception e) {
            // Handle other exceptions
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
	
	@DeleteMapping("delete/{id}")
	public void deleteByid(@PathVariable long id) {
	    studentService.deleteByid(id);
	}



}
