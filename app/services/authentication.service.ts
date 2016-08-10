import {Injectable} from '@angular/core';

//import schemas
import {LoginUser} from '../schemas/users.schema';

var users = [
  new LoginUser('shubham@quovantis.com','Host'),
  new LoginUser('grv@quovantis.com','Host')
];

@Injectable()
export class AuthenticationService {
 
  constructor(){}
 
  logout() {
    localStorage.removeItem("user");
    return true;
  }
 
  login(user){
    ///todo: need to call the api and get return data, message and token
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.email);
      return true;
    }
    return false;
 
  }
 
   isUserLoggedIn(){
    /// todo: need to optimize this when token will be implemented
    if (localStorage.getItem("user") === null){
        return false;
    }
    return true;
  } 
}