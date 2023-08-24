package com.tcshop.ecommerce.security;

import com.tcshop.ecommerce.dao.UserRepository;
import com.tcshop.ecommerce.entity.Role;
import com.tcshop.ecommerce.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username).orElseThrow(()->new UsernameNotFoundException("Username not found"));
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getUserPassword(),mapRolesToAuthorities(user.getRole()));
    }
    private Collection<GrantedAuthority> mapRolesToAuthorities(Set<Role> roles){
        return  roles.stream().map(role-> new SimpleGrantedAuthority(role.getRoleName())).collect(Collectors.toList());
    }
}

