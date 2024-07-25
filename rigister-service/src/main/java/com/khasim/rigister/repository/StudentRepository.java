package com.khasim.rigister.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.khasim.rigister.entity.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long>{

	public Student findByEmail(String username);
	
	@Modifying
	@Query("UPDATE Student s SET s.username = :value WHERE s.id = :id")
	void updateStudent(@Param("id") long id, @Param("value") String value);
}