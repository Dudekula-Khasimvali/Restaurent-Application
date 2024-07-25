package com.khasim.rigister.entity;

import com.khasim.rigister.model.CartDetails;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Lob
    @Column(name = "image", columnDefinition = "LONGBLOB")
    private byte[] image;

    private Long productId; // Store product ID
    private String proName;
    private String category; // Corrected the spelling from "catogiry" to "category"
    private double proPrice;
    private double rating;
    private int proQuantity;
    
    // Many cart items can belong to one student
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
    
    public void setStudentFromCartDetails(CartDetails cartDetails) {
        this.student = cartDetails.getStudent();
    }
    
}
