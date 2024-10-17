import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dtos/create-users.dtos";
import { UpdateUsersDto } from "./dtos/update-users.dtos";

@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Post('create')
    create(@Body() body: CreateUsersDto ) {
        return this.usersService.create(body);
    }

    @Get('view')
    findAll(){
        return this.usersService.findAll(); 
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body: UpdateUsersDto){
            return this.usersService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.usersService.delete(id);
    }
    
}