import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<{
        success: boolean;
        message: string;
        data: import("./user/user.entity").User;
    }>;
    findAll(): Promise<import("./user/user.entity").User[]>;
    findOne(eamil: string): Promise<import("./user/user.entity").User | null>;
    update(id: number, dto: UpdateUserDto): Promise<import("./user/user.entity").User>;
    remove(id: string): Promise<import("./user/user.entity").User>;
}
