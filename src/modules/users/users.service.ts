import { Injectable } from "@nestjs/common";
import { UsersRepositories } from "./repositories/users.repositories";
import { CreateUsersDto } from "./dtos/create-users.dtos";
import { UpdateUsersDto } from "./dtos/update-users.dtos";

@Injectable()
export class UsersService {
    constructor(private readonly userRepositories: UsersRepositories){}

    create(user: CreateUsersDto) {
        return this.userRepositories.create(user);
    }

    findAll(){
        return this.userRepositories.findAll();
    }

    update(id: string, updateUserDto: UpdateUsersDto){
        return this.userRepositories.updateUserById(id, updateUserDto);
    }

    delete(id: string){
        return this.userRepositories.deleteUserById(id)
    }
}