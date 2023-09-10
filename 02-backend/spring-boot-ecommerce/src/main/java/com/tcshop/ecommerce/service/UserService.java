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

//    public User verifyAccount(User userBody){
//
//        User user = userRepository.findByEmail(userBody.getEmail());
//        if(user.getOtp().equals(userBody.getOtp())){
//            user.setVerified(true);
//            userRepository.save(user);
//            return  user;
//        }
//
//        return  null;
//    }

}
