import { CharitiesRepository } from "../repositories/charities.repository";
import { Charities } from "../models/charities";
export declare class CharitiesController {
    protected charityRepo: CharitiesRepository;
    constructor(charityRepo: CharitiesRepository);
    findCharities(): Promise<Charities[]>;
    findCharityById(id: number): Promise<Charities>;
}
