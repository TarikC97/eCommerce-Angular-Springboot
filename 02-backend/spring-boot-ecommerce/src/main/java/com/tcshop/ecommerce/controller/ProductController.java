package com.tcshop.ecommerce.controller;

import com.tcshop.ecommerce.service.ProductService;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    ProductService productService;
    @Transactional
    @DeleteMapping("/products/delete/{sku}")
    public void deleteProduct(@PathVariable String sku){
        productService.deleteProduct(sku);
    }

}
