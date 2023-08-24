package com.tcshop.ecommerce.controller;

import com.tcshop.ecommerce.entity.Role;
import com.tcshop.ecommerce.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/roles")
public class RoleController {

    @Autowired
    private RoleService roleService;
    @PostMapping
    public Role createNewRole(@RequestBody Role role){
       return roleService.createNewRole(role);
    }
}
