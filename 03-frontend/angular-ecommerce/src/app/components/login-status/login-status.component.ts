import { Component, Inject } from '@angular/core';
import { OktaAuthStateService,OKTA_AUTH } from '@okta/okta-angular';
import {OktaAuth} from '@okta/okta-auth-js'

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent {

  isAuthenticated: boolean = false
  userFullName!: string

  constructor(private oktaAuthService: OktaAuthStateService,
  @Inject(OKTA_AUTH) private oktaAuth: OktaAuth){}


  //Subscribe to auth state changes
  ngOnInit(): void{
    this.oktaAuthService.authState$.subscribe(
      (result)=>{
        this.isAuthenticated = result.isAuthenticated!
        this.getUserDetails()
      }
    )
  }
  getUserDetails() {
    if(this.isAuthenticated){
      //Fetch logged user details
      this.oktaAuth.getUser().then(
        (res)=>{
          this.userFullName = res.name as string
        }
      )
    }
   }
    logout(){
      this.oktaAuth.signOut()
    }
}


