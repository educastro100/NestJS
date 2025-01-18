import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from './entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {

    /**
     * Constructs a new instance of the StateService.
     * 
     * @param stateRepository - The repository instance for managing StateEntity objects.
     */
    constructor(
        @InjectRepository(StateEntity)
        private readonly stateRepository: Repository<StateEntity>,
    ) {}

async getAllState() : Promise <StateEntity[]> {
    return this.stateRepository.find();
}


}
