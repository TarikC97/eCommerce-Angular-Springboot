package com.tcshop.ecommerce.service;

import com.tcshop.ecommerce.dao.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    @Transactional
    public void deleteProduct(String sku){
        productRepository.removeBySku(sku);
    }
}
