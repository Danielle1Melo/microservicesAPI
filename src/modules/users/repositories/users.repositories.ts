import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from "../dtos/create-users.dtos";
import { UpdateUsersDto } from "../dtos/update-users.dtos";
import { randomUUID } from "node:crypto";

@Injectable()
export class UsersRepositories {
    private users: any[] = [];


    create(user: CreateUsersDto){ 

        const formatUser = {
            id: randomUUID(),
            email: user.email,
            name: user.name,
            phone: user.phone,
          
        }

        this.users.push(formatUser);

        return formatUser;
    }

    findAll(){
        return this.users;
    }

    updateUserById(id :string, data: UpdateUsersDto){
        const user = this.users.find((user) => user.id === id);    

        for (const key in data){
            user[key] = data[key];
        }

        return user;
    }

    deleteUserById(id:string){
        const index = this.users.findIndex((user) => user.id === id);

        this.users.splice(index, 1);
    }
}