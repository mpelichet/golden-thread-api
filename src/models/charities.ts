import {Entity, property, model} from '@loopback/repository';

@model({
    name: "charity"
})
//boilerplate code: standard code used to create a repository


export class Charities extends Entity{
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
    name: string;

    @property({
        type: 'string',
        id: true, 
        required: true
    })
    description: string;

    @property({
        type: 'string',
        id: true, 
        required: true
    })
    url: string;

    @property({
        type: 'string',
        id: true,
        required: true 
    })
    image: string;

    @property({
        type: 'string',
        id: true,
        required: true 
    })
    donationgoal: string;

    getId(){
        return this.id;
    }
}