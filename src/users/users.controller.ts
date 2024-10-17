import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateuserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Post()
    create(@Body() user: CreateuserDto){
        if(!user.email || !user.name) throw new Error
        return this.usersService.create(user);
    }
}
