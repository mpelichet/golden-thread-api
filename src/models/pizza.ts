import {Entity, property, model} from '@loopback/repository';

@model()

//boilerplate code: standard code used to create a repository

export class Pizza extends Entity{
    @property({
        type: 'number',
        id: true
    })

    id?: number;

    name: string;
    desc: string;
    toppings: string;
}