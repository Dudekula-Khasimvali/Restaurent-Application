package com.khasim.product.controller;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.khasim.product.entity.Products;
import com.khasim.product.exception.ResourceNotFoundException;
import com.khasim.product.model.ProductDetails;
import com.khasim.product.service.ProductService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"*"})
public class ProductController {

    @Autowired
    ProductService service;
    
    @PostMapping(value = "/create", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<Products> createProduct(@RequestParam("image") MultipartFile image,
                                                   @RequestParam("proName") String proName,
                                                   @RequestParam("catogiry") String catogiry,
                                                   @RequestParam("proPrice") double proPrice,
                                                   @RequestParam("rating") double rating) {
        // Check if the image file is provided
        if (image == null || image.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

        // Read the bytes from the image file
        byte[] imageBytes;
        try {
            imageBytes = image.getBytes();
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        // Create a ProductDetails object
        ProductDetails details = new ProductDetails();
        details.setImage(imageBytes);
        details.setProName(proName);
        details.setCatogiry(catogiry);
        details.setProPrice(proPrice);
        details.setRating(rating);
        
        // Call the service method to create the product
        Products createdProduct = service.createProduct(details);
        
        // Return the created product in the response
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }
    
    
    @GetMapping("/get")
    public ResponseEntity<List<Products>> getProducts() {
        List<Products> products = service.getProducts();
        return ResponseEntity.ok(products);
    }
    
    @GetMapping("/getById/{id}")
    public ResponseEntity<Products> getById(@PathVariable long id) {
        Products product = service.getById(id);
        return ResponseEntity.of(Optional.ofNullable(product));
    }
    
    @GetMapping("/getByProName/{proName}")
    public ResponseEntity<Products> getByProName(@PathVariable String proName) {
        Products product = service.getByProName(proName);
        return ResponseEntity.of(Optional.ofNullable(product));
    }
    
    @GetMapping("/getCatogiry/{catogiry}")
    public List<Products> getByCatogiry(@PathVariable String catogiry)
    {
    	return service.getByCatogiry(catogiry);
    }
    

    //Update
    @PutMapping("/update/{id}")
    public ResponseEntity<Products> updateProduct(@PathVariable Long id,
                                                  @RequestParam("image") MultipartFile image,
                                                  @RequestParam("proName") String proName,
                                                  @RequestParam("catogiry") String catogiry,
                                                  @RequestParam("proPrice") double proPrice,
                                                  @RequestParam("rating") double rating) {
        try {
            ProductDetails updatedProductDetails = new ProductDetails();
            updatedProductDetails.setProName(proName);
            updatedProductDetails.setCatogiry(catogiry);
            updatedProductDetails.setProPrice(proPrice);
            updatedProductDetails.setRating(rating);

            Products updatedProduct = service.updateProduct(id, updatedProductDetails, image);
            if (updatedProduct != null) {
                return ResponseEntity.ok(updatedProduct);
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
            }
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }


    
    //To Delete The Data
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id) {
        service.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
