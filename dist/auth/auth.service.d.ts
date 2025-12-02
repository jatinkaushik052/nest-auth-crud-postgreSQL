import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private userService;
    private jwt;
    constructor(userService: UsersService, jwt: JwtService);
    signup(dto: any): Promise<{
        message: string;
        user: {
            success: boolean;
            message: string;
            data: import("../users/user/user.entity").User;
        };
    }>;
    login(dto: any): Promise<{
        message: string;
        data: import("../users/user/user.entity").User;
        access_token: string;
    }>;
}
