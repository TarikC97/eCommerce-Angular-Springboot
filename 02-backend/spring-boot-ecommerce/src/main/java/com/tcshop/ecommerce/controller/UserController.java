package com.tcshop.ecommerce.controller;

import com.tcshop.ecommerce.dao.UserRepository;
import com.tcshop.ecommerce.entity.User;
import com.tcshop.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @PostMapping("/register")
    public User registerNewUser(@RequestBody  User user){

        if(userRepository.existsByEmail(user.getEmail())){
            throw new IllegalStateException("Email taken");
        }
        else{

            User newUser = new User();
            newUser.setName(user.getName());
            newUser.setSurname(user.getSurname());
            newUser.setEmail(user.getEmail());
            newUser.setRole(user.getRole());
            newUser.setPassword(user.getPassword());
            userRepository.save(newUser);

            return userService.registerNewUser(newUser);
        }
    }
    @PostMapping("/login")
    public User loginUser(@RequestBody User userData){
        User user = userRepository.findByEmail(userData.getEmail());
        if(user.getPassword().equals(userData.getPassword())){
            return user;
        }
        else{
            throw new IllegalStateException("User doesn't exist!");
       }
    }
}
