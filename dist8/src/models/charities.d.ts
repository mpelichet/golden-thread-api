import { Entity } from '@loopback/repository';
export declare class Charities extends Entity {
    id?: number;
    name: string;
    description: string;
    url: string;
    image: string;
    donationgoal: number;
    getId(): number | undefined;
}
