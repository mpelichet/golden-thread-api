// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { get, requestBody } from "@loopback/rest";
import { Users } from "../models/users";


export class UsersController {

  constructor(
    @repository(UsersRepository.name) private userRepo: UsersRepository
  ) {}

  @get('/users')
  async getAllPizzas(): Promise<Array<Users>> {
    return await this.userRepo.find();
  }
}