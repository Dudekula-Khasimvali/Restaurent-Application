package com.khasim.product.service;
import java.io.IOException;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.khasim.product.entity.Products;
import com.khasim.product.exception.ResourceNotFoundException;
import com.khasim.product.model.ProductDetails;
import com.khasim.product.repository.ProductRepository;



@Service
public class ProductService {
	
	@Autowired
    ProductRepository repository;
	
	

    public Products createProduct(ProductDetails productDetails) {
        Products product = new Products();
        product.setImage(productDetails.getImage());
        product.setProName(productDetails.getProName());
        product.setCatogiry(productDetails.getCatogiry());
        product.setProPrice(productDetails.getProPrice());
        product.setRating(productDetails.getRating());
        return repository.save(product);
    }

    public List<Products> getProducts() {
        return repository.findAll();
    }

    public Products getById(long id) {
        return repository.findById(id)
                .orElse(null);
    }

    public Products getByProName(String proName) {
        return repository.findByproName(proName);
    }

    public void deleteById(long id) {
        repository.deleteById(id);
    }

    public List<Products> getByCatogiry(String catogiry) {
        return repository.findByCatogiry(catogiry);
    }

    //update
    public Products updateProduct(Long id, ProductDetails updatedProductDetails, MultipartFile image) {
        // Retrieve the existing product from the database based on the provided ID
        Optional<Products> optionalProduct = repository.findById(id);
        if (optionalProduct.isPresent()) {
            Products existingProduct = optionalProduct.get();

            // Update the existing product details with the updated details
            existingProduct.setProName(updatedProductDetails.getProName());
            existingProduct.setCatogiry(updatedProductDetails.getCatogiry());
            existingProduct.setProPrice(updatedProductDetails.getProPrice());
            existingProduct.setRating(updatedProductDetails.getRating());

            // Update the product image if a new image is provided
            if (image != null && !image.isEmpty()) {
                try {
                    existingProduct.setImage(image.getBytes());
                } catch (IOException e) {
                    e.printStackTrace();
                    // Handle the exception as needed
                }
            }

            // Save the updated product back to the database
            return repository.save(existingProduct);
        } else {
            // If the product with the provided ID is not found, throw a ResourceNotFoundException
            throw new ResourceNotFoundException("Product not found with id: " + id);
        }
    }

	

   
}