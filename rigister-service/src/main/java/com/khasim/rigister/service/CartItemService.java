package com.khasim.rigister.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.khasim.rigister.entity.CartItem;
import com.khasim.rigister.model.CartDetails;
import com.khasim.rigister.repository.CartRepository;

import java.util.List;

@Service
public class CartItemService {

    @Autowired
    private CartRepository cartRepository;

    public CartItem addToCart(CartDetails cartDetails) {
        CartItem item = new CartItem();
        item.setProductId(cartDetails.getProductId());
        item.setProName(cartDetails.getProName());
        item.setProPrice(cartDetails.getProPrice());
        item.setCategory(cartDetails.getCatogiry()); // Corrected the method name
        item.setRating(cartDetails.getRating());
        item.setProQuantity(cartDetails.getProQuantity());
        item.setImage(cartDetails.getImage());
        item.setStudent(cartDetails.getStudent()); // Set the Student object directly
        return cartRepository.save(item);
    }

    public List<CartItem> getCartItems() {
        return cartRepository.findAll();
    }
}
