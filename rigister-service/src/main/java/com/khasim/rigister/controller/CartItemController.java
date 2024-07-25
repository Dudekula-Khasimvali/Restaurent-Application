package com.khasim.rigister.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.khasim.rigister.entity.CartItem;
import com.khasim.rigister.model.CartDetails;
import com.khasim.rigister.service.CartItemService;

import java.util.List;

@RestController
@RequestMapping("/api/cart")
@CrossOrigin(origins = {"*"})
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @PostMapping("/create")
    public CartItem addToCart(@RequestBody CartDetails cartDetails) {
        return cartItemService.addToCart(cartDetails);
    }

    @GetMapping("/get")
    public List<CartItem> getCartItems() {
        return cartItemService.getCartItems();
    }
}
