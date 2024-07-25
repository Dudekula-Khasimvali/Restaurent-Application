package com.khasim.product.model;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ProductDetails {

	private byte[]  image;
	private String proName;
	private String catogiry;
	private double proPrice;
	private double rating;
}
