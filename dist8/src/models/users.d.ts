import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    id?: number;
    firstname: string;
    username: string;
    lastname: string;
    password: string;
    getId(): number | undefined;
}
