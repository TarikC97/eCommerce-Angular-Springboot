import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';
import { Roles } from '../common/roles';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = 'http://localhost:8080/api/register';
  private loginUrl = 'http://localhost:8080/api/login';
  private verifyUrl = 'http://localhost:8080/api/verify';

  constructor(private httpClient: HttpClient) { }
  public loginStatus = 0 //0-not logged,1-logged!

  registerUser(register: User):Observable<any>{
      return this.httpClient.post<User>(this.registerUrl,register);
  }
  verifyUser(verify: User):Observable<any>{
    return this.httpClient.put<User>(this.verifyUrl,verify)
  }
  loginUser(login:User):Observable<any>{
    return this.httpClient.post<User>(this.loginUrl,login)
  }
  setLoginStatus(status: number){
    this.loginStatus = status
  }
}

interface GetResponseRoles{
    role: Roles[]
}