import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from './interfaces/user.interface';
import { createUserDto } from './dtos/createUser.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

    //Construtor para injetar dependências
    constructor(
        @InjectRepository(UserEntity) // Injeta o repository de UserEntity

        //Atributo para acessar o repository de UserEntity
        private readonly userRepository : Repository<UserEntity>,
    ){}

    


    async CreateUser(createUserDto: createUserDto) : Promise<UserEntity> {

        // Criptografar a senha
        const saltOrRounds = 10;


        const passwordHashed = await bcrypt.hash(createUserDto.password, saltOrRounds);


        return this.userRepository.save({
            ...createUserDto,
            typeUser: 1,
            password: passwordHashed,
        })
    }


    async getAllUsers() : Promise<UserEntity[]> {
        return this.userRepository.find();
    }


    async findUserById(userId : number) : Promise<UserEntity> {
        const user = await this.userRepository.findOne({
            where: {
                id : userId
            }
        });

        if(!user){
            throw new NotFoundException('UserId not found');
        }

        return user;
    }

}
