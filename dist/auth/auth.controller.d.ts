import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: CreateUserDto): Promise<{
        message: string;
        user: {
            success: boolean;
            message: string;
            data: import("../users/user/user.entity").User;
        };
    }>;
    login(dto: LoginDto): Promise<{
        message: string;
        data: import("../users/user/user.entity").User;
        access_token: string;
    }>;
}
