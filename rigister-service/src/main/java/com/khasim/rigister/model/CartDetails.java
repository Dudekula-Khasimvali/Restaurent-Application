package com.khasim.rigister.model;

import com.khasim.rigister.entity.Student;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartDetails {

	 private byte[] image;

	    private Long productId; // Store product ID
	    private String proName;
	    private String catogiry;
	    private double proPrice;
	    private double rating;
	    private int proQuantity;
	    private Student student;
}