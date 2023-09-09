package com.tcshop.ecommerce.service;

import com.tcshop.ecommerce.config.EmailBody;
import com.tcshop.ecommerce.config.OtpCode;
import com.tcshop.ecommerce.dao.UserRepository;
import com.tcshop.ecommerce.entity.User;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private OtpCode otpCode;

    @Autowired
    private EmailBody emailBody;

    public User registerNewUser(User user) {
        String otp = otpCode.generateOtp();
        try {
            emailBody.sendOtp(user.getEmail(),otp);
        } catch (MessagingException e) {
            throw new RuntimeException("Unable to send otp please try again!");
        }
        User newUser = new User();
        newUser.setOtp(otp);
        return  userRepository.save(user);
    }
}
