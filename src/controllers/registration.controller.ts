// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;

import { repository } from "@loopback/repository";
import { UsersRepository } from "../repositories/users.repository";
import { HttpErrors, post, requestBody } from "@loopback/rest";
import { Users } from "../models/users";


export class LoginController {
  constructor(
    @repository(UsersRepository) protected userRepo: UsersRepository,
  ) {}

  @post('/login')
  async loginUser(@requestBody() user: Users): Promise<Users> {
    // Check that email and password are both supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    // Check that email and password are valid
    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { email: user.email },
        { password: user.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }

    return await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email },
          { password: user.password }
        ],
      },
    });
  }
}