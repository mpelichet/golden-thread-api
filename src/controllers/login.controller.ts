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
  async createLogin(@requestBody() users: Users) {
    return await this.userRepo.create(users);
  }

}
