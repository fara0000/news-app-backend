import { EntityRepository, Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../entities/user';

@EntityRepository(User)
export class UserRepository extends Repository<User>{

    public async getAll(): Promise<any> {
        return this.find();
    };
}

