import {Entity, property, model} from '@loopback/repository';

@model({
    name: "user"
})
//boilerplate code: standard code used to create a repository


export class Users extends Entity{
    @property({
        type: 'number',
        id: true,
        required: true
    })
    id?: number;

    @property({
        type: 'string',
        required: true
    })
    firstname: string;

    @property({
        type: 'string',
        id: true, 
        required: true
    })
    username: string;

    @property({
        type: 'string',
        id: true, 
        required: true
    })
    lastname: string;

    @property({
        type: 'string',
        id: true,
        required: true 
    })
    password: string;

    getId(){
        return this.id;
    }
}