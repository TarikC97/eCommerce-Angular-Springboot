package com.tcshop.ecommerce.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private CustomUserDetailsService customUserDetailsService;
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity httpSecurity) throws Exception{
        return  httpSecurity
                            .csrf(csrf->csrf.disable())
                            .authorizeHttpRequests(auth->{
                                auth.requestMatchers(HttpMethod.GET).authenticated();
                                auth.anyRequest().authenticated();
                            })
                            .httpBasic(Customizer.withDefaults())
                            .build();
    }
    @Bean
    public UserDetailsService users(){
        UserDetails admin = User.builder()
                        .username("admin")
                        .password("123456")
                        .roles("ADMIN")
                        .build();
        UserDetails user = User.builder()
                        .username("user")
                        .password("123456")
                        .roles("USER")
                        .build();
        return  new InMemoryUserDetailsManager(admin,user);
    }
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws  Exception{
            return authenticationConfiguration.getAuthenticationManager();
    }
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
}
