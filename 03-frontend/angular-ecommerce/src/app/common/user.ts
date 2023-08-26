export class User {
    id!:number;
    name!:string;
    surname!:string;
    email!:string;
    password!:string;
    role!:Role;
}
export enum Role{
    Admin,User,
}
// enum role{
//     Admin,
//     User
// }