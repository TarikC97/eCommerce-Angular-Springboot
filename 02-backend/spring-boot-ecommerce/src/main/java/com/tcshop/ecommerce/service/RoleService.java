package com.tcshop.ecommerce.service;

import com.tcshop.ecommerce.dao.RoleRepository;
import com.tcshop.ecommerce.entity.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleRepository roleRepository;
    public Role createNewRole(Role role){
        return roleRepository.save(role);
    }

}
