import { Injectable } from '@nestjs/common';
import { UserRepository } from "../../database/repositories/user";

@Injectable()
export class UserService {
    constructor(
       private readonly userRepository: UserRepository,
    ) {}

    getHello(): string {
        console.log(this.userRepository.getAll());
        return 'Hello World!';
    }
}
