import { Injectable } from "@nestjs/common";
import { CreateUsersDto } from "../dtos/create-users.dtos";
import { UpdateUsersDto } from "../dtos/update-users.dtos";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/modules/global/prisma/prisma.service";

@Injectable()
export class UsersRepositories {
   constructor(private readonly prismaService: PrismaService){}

     async create(user: CreateUsersDto){ 

        const formatUser = {
            id: randomUUID(),
            email: user.email,
            name: user.name,
          
        }

        await this.prismaService.users.create({
            data: formatUser,
        });
        return formatUser;
    }

    async findAll(){
        return await this.prismaService.users.findMany();
    }

    async updateUserById(id :string, data: UpdateUsersDto){
        const user = await this.prismaService.users.update({
            where: {
                id,
            },
             data,
        })

        return user;
    }

    async deleteUserById(id:string){
        return await this.prismaService.users.delete({ where: {id}})
    }
}