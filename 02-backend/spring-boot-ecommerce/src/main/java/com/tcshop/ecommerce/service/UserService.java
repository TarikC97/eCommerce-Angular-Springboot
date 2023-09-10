package com.tcshop.ecommerce.service;

import com.tcshop.ecommerce.dao.UserRepository;
import com.tcshop.ecommerce.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User registerNewUser(User user) {
        return  userRepository.save(user);
    }

    public String verifyAccount(String email,String otp){

        User user = userRepository.findByEmail(email);
        if(user.getOtp().equals(otp)){
            user.setVerified(true);
            userRepository.save(user);
            return  "OTP verified! You can login now!";
        }

        return  otp;
    }

}
