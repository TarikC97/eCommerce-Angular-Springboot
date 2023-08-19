package com.tcshop.ecommerce.service;

import com.tcshop.ecommerce.dto.Purchase;
import com.tcshop.ecommerce.dto.PurchaseResponse;

public interface CheckoutService {

    //Send back PurchaseResponse
    PurchaseResponse placeOrder(Purchase purchase);
}
