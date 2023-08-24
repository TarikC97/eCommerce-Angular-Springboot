package com.tcshop.ecommerce.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
public class User {
    @Id
    private String userName;
    private String userFirstName;
    private String userLastName;
    private String email;
    private String userPassword;
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_role",
    joinColumns = {
            @JoinColumn(name = "user_id")
        },
            inverseJoinColumns = {
                @JoinColumn(name="role_id")
            }
    )
    private Set<Role> role;
}
