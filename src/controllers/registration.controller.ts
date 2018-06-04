// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;

import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { post, requestBody } from "@loopback/rest";
import { Users } from "../models/users";


export class RegistrationController {

  constructor(
    @repository(UsersRepository.name) private userRepo: UsersRepository
  ) {}

  @post('/registration')
  async createRegistration (@requestBody() users: Users) {
    return await this.userRepo.create(users);
  }

}
