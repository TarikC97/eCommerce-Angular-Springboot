import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Role, User } from 'src/app/common/user';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // role:Role[]=[];

  constructor(private userService: RegisterService){}
  registerUser(regForm: NgForm){
    this.userService.registerUser(regForm.value).subscribe(
      (response)=>{
        // this.role = response.role;
        console.log(response);
      },
      (error)=>{
        console.log(error)
      }
      
    )
  }

}
