import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.interface';

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
    @Post()
    async createUser(@Body() createUser: createUserDto ) : Promise<UserEntity> {

        return this.userService.CreateUser(createUser);
    }


    @Get()
    async getAllUsers() : Promise<UserEntity[]> {
        return this.userService.getAllUsers();
    }


}

