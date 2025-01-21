import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.interface';
import { ReturnUserDto } from './dtos/returnUser.dto';

/**
 * Controller for handling user-related operations.
 */
/**
 * UserController handles user-related operations.
 */
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {

    }

    /**
     * Retrieves all users.
     * 
     * @returns A JSON string containing a test object.
     */
    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: createUserDto ) : Promise<UserEntity> {

        return this.userService.CreateUser(createUser);
    }


    @Get()
    async getAllUsers() : Promise<ReturnUserDto[]> {
        return (await this.userService.getAllUsers()).map(
            (userEntity) => new ReturnUserDto(userEntity),
        );
    }


}

