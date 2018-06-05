import { UsersRepository } from "../repositories/users.repository";
import { Users } from "../models/users";
export declare class UsersController {
    protected userRepo: UsersRepository;
    constructor(userRepo: UsersRepository);
    findUsers(): Promise<Users[]>;
    findUsersById(id: number): Promise<Users>;
}
