import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserRepository } from "../../database/repositories/user";
import { User } from '../../database/entities/user';

@Module({
    imports: [TypeOrmModule.forFeature([UserRepository, User])],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
