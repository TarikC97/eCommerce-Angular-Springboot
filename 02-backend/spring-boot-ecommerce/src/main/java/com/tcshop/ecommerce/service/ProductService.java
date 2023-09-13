package com.tcshop.ecommerce.service;

import com.tcshop.ecommerce.dao.ProductRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;
//    public List<Product> getAllProducts(){
//        List<Product> products = new ArrayList<Product>();
//        productRepository.findAll().forEach(product -> products.add(product));
//        return  products;
//    }

    @Transactional
    public void deleteProduct(String sku){
        productRepository.removeBySku(sku);
    }
}