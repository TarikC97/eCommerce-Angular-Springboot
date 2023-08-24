package com.tcshop.ecommerce.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
//@Table(name = "role")
public class Role {
    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    //@Column(name = "role_name")
    private String roleName;
    //@Column(name = "role_description")
    private String roleDescription;
}
