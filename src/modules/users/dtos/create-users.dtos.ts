import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUsersDto {
    @ApiProperty({
        description: 'email of user',
        example: 'email@email.com'
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'name of user',
        example: 'Danielle Silva de Melo'
    })
    @IsString()
    name:string;

}