import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { Roles } from '../common/roles';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = 'http://springtc.eu-north-1.elasticbeanstalk.com/api/register';
  private loginUrl = 'http://springtc.eu-north-1.elasticbeanstalk.com/api/login';
  private verifyUrl = 'http://springtc.eu-north-1.elasticbeanstalk.com/api/verify';

  constructor(private httpClient: HttpClient,
              private router: Router) {}
  registerUser(register: User):Observable<any>{
      return this.httpClient.post<User>(this.registerUrl,register);
  }
  verifyUser(verify: User):Observable<any>{
    return this.httpClient.put<User>(this.verifyUrl,verify)
  }
  loginUser(login:User):Observable<any>{
    return this.httpClient.post<User>(this.loginUrl,login)
  }
  loggedIn(){
    return !!window.localStorage.getItem('userLogged')
  }
  logout() {
    //Removes user from data storage, and redirects.
    window.localStorage.removeItem('userLogged')
    window.localStorage.removeItem('user')
    this.router.navigate(['/login'])
  }
}