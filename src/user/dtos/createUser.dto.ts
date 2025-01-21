import { IsString } from "class-validator";

// Interface para criação de um usuário
export class createUserDto{
    @IsString()
    name : string;

    @IsString()
    email : string;

    @IsString()
    phone : string;

    @IsString()
    cpf : string;

    @IsString()
    password : string;
}