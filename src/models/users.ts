import {Entity, property, model} from '@loopback/repository';

@model()

export class Users extends Entity{
    @property({
        type: 'number',
        id: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    name: string;

    @property({
        type: 'string',
        id: true
    })
    username: string;

    @property({
        type: 'string',
        id: true
    })
    password: string;

    getId(){
        return this.id;
    }
}