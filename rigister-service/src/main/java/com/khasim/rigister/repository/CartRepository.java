package com.khasim.rigister.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.khasim.rigister.entity.CartItem;


@Repository
public interface CartRepository  extends JpaRepository<CartItem, Long>{
	
	@Query("SELECT c FROM CartItem c WHERE c.student.id = ?1")
    List<CartItem> findByStudentId(Long studentId);

}
