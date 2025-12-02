import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(dto: CreateUserDto): Promise<{
        success: boolean;
        message: string;
        data: User;
    }>;
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User | null>;
    updateUser(id: number, dto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<User>;
}
