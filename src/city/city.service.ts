import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { CityEntity } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cache } from 'cache-manager';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {


constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,
    private readonly cacheService: CacheService,
){}


async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    
    return this.cacheService.getCache<CityEntity[]>(`state_${stateId}`,

        () => this.cityRepository.find({where : {stateId}})
    )

    // const citiesCache : CityEntity[] = await this.cacheManager.get(stateId.toString());

    // if(citiesCache){
    //     return citiesCache;
    // }

    // const cities = await this.cityRepository.find({where : {stateId}});

    // await this.cacheManager.set(stateId.toString(), cities);


    // return cities

}
}
