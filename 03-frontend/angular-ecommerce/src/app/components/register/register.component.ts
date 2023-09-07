import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  User } from 'src/app/common/user';
import { Roles } from 'src/app/common/roles';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = Roles.User;
  admin = Roles.Admin;

  constructor(private userService: RegisterService){}
  registerUser(regForm: NgForm){
    this.userService.registerUser(regForm.value).subscribe(
      (response)=>{
      
        console.log(response);
      },
      (error)=>{
        console.log(error)
      }
      
    )
  }
  
}
