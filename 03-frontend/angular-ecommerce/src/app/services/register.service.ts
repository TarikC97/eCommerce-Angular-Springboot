import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl = 'http://localhost:8080/api/register';
  private loginUrl = 'http://localhost:8080/api/login';

  constructor(private httpClient: HttpClient) { }

  registerUser(register: User):Observable<any>{
      return this.httpClient.post<User>(this.registerUrl,register);
  }
  loginUser(login:User):Observable<any>{
    return this.httpClient.post<User>(this.loginUrl,login)
  }
}
