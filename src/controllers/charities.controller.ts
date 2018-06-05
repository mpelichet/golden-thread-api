// Uncomment these imports to begin using these cool features!

// import {inject} from @loopback/context;


import { repository } from "@loopback/repository";
import { CharitiesRepository } from "../repositories/charities.repository";
import { HttpErrors, param, get, requestBody } from "@loopback/rest";
import { Charities } from "../models/charities";


export class CharitiesController {
  constructor(
    @repository(CharitiesRepository) protected charityRepo: CharitiesRepository,
  ) {}

  @get('/charities')
  async findCharities(): Promise<Charities[]> {
    return await this.charityRepo.find();
  }

  @get('/charities/{id}')
  async findCharityById(@param.path.number('id') id: number): Promise<Charities> {
    // Check for valid ID
    let charityExists: boolean = !!(await this.charityRepo.count({ id }));

    if (!charityExists) {
      throw new HttpErrors.BadRequest(`charity ID ${id} does not exist`);
    }

    return await this.charityRepo.findById(id);
  }
}
