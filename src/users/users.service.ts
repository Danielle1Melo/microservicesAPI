import { Injectable } from '@nestjs/common';
import { CreateuserDto } from './dtos/create-user.dto';

global.users = ['Dani']

@Injectable()
export class UsersService {
    findAll(): any[]{
        return global.users;  
    }

    create(user: CreateuserDto){
        global.users.push(user)
    }
}
