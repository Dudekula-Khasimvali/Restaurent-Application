package com.khasim.product.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.khasim.product.entity.Products;

@Repository
public interface ProductRepository extends JpaRepository<Products, Long> {

    public Products findByproName(String proName);
    	
	public List<Products> findByCatogiry(String catogiry);
}