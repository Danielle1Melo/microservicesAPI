import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dtos/create-users.dtos";
import { UpdateUsersDto } from "./dtos/update-users.dtos";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { ApiDocGenericPost } from "src/app/common/api-doc-post-generic.decorator";


@ApiTags('Users')
@Controller('users')
export class UsersController{
    constructor(private readonly usersService: UsersService){}

    @Post()
    @ApiDocGenericPost('user-create', CreateUsersDto)
    async create(@Body() body: CreateUsersDto ) {
        return await this.usersService.create(body);
    }

    @Get() 
    async findAll(){
        return await this.usersService.findAll(); 
    }

    @Patch(':id')
    async update(@Param('id') id:string, @Body() body: UpdateUsersDto){
            return await this.usersService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id:string){
        return await this.usersService.delete(id);
    }
    
}