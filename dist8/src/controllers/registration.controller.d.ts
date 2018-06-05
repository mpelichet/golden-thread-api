import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class LoginController {
    protected userRepo: UsersRepository;
    constructor(userRepo: UsersRepository);
    loginUser(user: Users): Promise<Users>;
}
