import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class UsersController {
    private userRepo;
    constructor(userRepo: UsersRepository);
    getAllUsers(): Promise<Array<Users>>;
}
