// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;
import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { HttpErrors, param, get, requestBody } from "@loopback/rest";
import { Users } from "../models/users";


export class UsersController {
  constructor(
    @repository(UsersRepository) protected userRepo: UsersRepository,
  ) {}

  @get('/users')
  async findUsers(): Promise<Users[]> {
    return await this.userRepo.find();
  }

  @get('/users/{id}')
  async findUsersById(@param.path.number('id') id: number): Promise<Users> {
    // Check for valid ID
    let userExists: boolean = !!(await this.userRepo.count({ id }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${id} does not exist`);
    }

    return await this.userRepo.findById(id);
  }
}