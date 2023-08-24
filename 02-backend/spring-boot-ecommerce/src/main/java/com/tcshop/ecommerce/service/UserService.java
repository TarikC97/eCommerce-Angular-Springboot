package com.tcshop.ecommerce.service;

import com.tcshop.ecommerce.dao.RoleRepository;
import com.tcshop.ecommerce.dao.UserRepository;
import com.tcshop.ecommerce.entity.Role;
import com.tcshop.ecommerce.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    public User registerUser(User user){

//      Role role =  userRepository.findById("User");

        return  userRepository.save(user);
    }
    //Optional cause of ddl-auto - create(drops all data from db).
    public void initRolesAndUser(){
        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleRepository.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for new customer.");
        roleRepository.save(userRole);

        User adminUser = new User();
        adminUser.setUserFirstName("AdminTC");
        adminUser.setUserLastName("Curic");
        adminUser.setUserName("TarikC115");
        adminUser.setUserPassword("123456");
        adminUser.setEmail("tarik97@gmail.com");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userRepository.save(adminUser);

//        User user = new User();
//        user.setUserFirstName("UserAC");
//        user.setUserLastName("Curic");
//        user.setUserName("AsijaC115");
//        user.setUserPassword("123456");
//        user.setEmail("asija99@gmail.com");
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userRepository.save(user);
    }
//   public String getEncodedPassword(String password){
//       return passwordEncoder.encode(password);
//    }
}
