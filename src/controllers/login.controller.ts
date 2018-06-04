// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, requestBody } from "@loopback/rest";
import { Users } from "../models/users";



export class LoginController {
  constructor(
    @repository(UsersRepository.name) private userRepo: UsersRepository
  ) {}

  @post('/login')
  async createLogin(@requestBody() login: Users) {
    var users =  await this.userRepo.find();
    var username = login.username;
    var password = login.password; 

    for (var i = 0;  i < users.length; i++){
      var user = users[i]; 
      if (login.username == users[i].username && login.password == users[i].password){
        return user.i; 
      }
    }

    return console.error("Sorry, that's wrong");


  }

}
