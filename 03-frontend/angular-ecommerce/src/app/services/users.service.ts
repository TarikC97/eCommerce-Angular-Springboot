import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../common/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'http://localhost:8080/api/users';
  private deleteUrl = 'http://localhost:8080/api/delete';

  constructor(private httpClient: HttpClient) { }

    getUsers():Observable<User[]>{
        return this.httpClient.get<User[]>(this.usersUrl);
    }
     deleteUser(user: number):Observable<any>{
       return this.httpClient.delete<any>(`${this.deleteUrl}/${user}`);
   }

}
