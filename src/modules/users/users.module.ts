import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UsersRepositories } from "./repositories/users.repositories";

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService, UsersRepositories],
})
export class UsersModule {}