import { Injectable } from "@nestjs/common";
import { UsersRepositories } from "./repositories/users.repositories";
import { CreateUsersDto } from "./dtos/create-users.dtos";
import { UpdateUsersDto } from "./dtos/update-users.dtos";

@Injectable()
export class UsersService {
    constructor(private readonly userRepositories: UsersRepositories){}

    async create(user: CreateUsersDto) {
        return await this.userRepositories.create(user);
    }

    async findAll(){
        return await this.userRepositories.findAll();
    }

    async update(id: string, updateUserDto: UpdateUsersDto){
        return await this.userRepositories.updateUserById(id, updateUserDto);
    }

    async delete(id: string){
        return await this.userRepositories.deleteUserById(id)
    }
}