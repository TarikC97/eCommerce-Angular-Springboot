import { Component } from '@angular/core';
import { User } from 'src/app/common/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = []
  constructor( private userService: UsersService){}

  ngOnInit():void{
       this.userService.getUsers().subscribe({
       next: data=>{
        this.users = data;
      },
      error: err =>{
        alert(`There was an error:${err.message}`)
      }
    }) 
  }
   deleteUser(user: any){
    this.userService.deleteUser(user).subscribe({
      next: data=>{
        alert('User deleted')
      }
    })
   }

}
