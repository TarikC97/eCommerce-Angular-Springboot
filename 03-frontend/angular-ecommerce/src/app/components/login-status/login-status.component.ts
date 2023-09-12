import { Component} from '@angular/core';
import { User } from 'src/app/common/user';
import {Router} from '@angular/router'
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent {

   user: User = JSON.parse(localStorage.getItem('userLogged') || '{}')
   name:any = this.user.name

   constructor(private router: Router,
               public status: RegisterService,
               public userLog: RegisterService){}
    logout() {
      //Removes user from data storage, and redirects.
      localStorage.removeItem('userLogged')
      localStorage.removeItem('user')
      this.status.setLoginStatus(0);
      this.router.navigate(['/login'])
    }

}
