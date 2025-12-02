import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwt: JwtService) { }

    async signup(dto: any) {
        const existingUser = await this.userService.findByEmail(dto.email);

        if (existingUser) {
            throw new BadRequestException("Email id is already registered");
        }

        const hash = await bcrypt.hash(dto.password, 10);

        const user = await this.userService.create({
            name: dto.name,
            email: dto.email,
            password: hash,
        });

        return {
            message: 'User registered successfully',
            user,
        };
    }

    async login(dto: any) {
        const user = await this.userService.findByEmail(dto.email)
        if (!user) {
            throw new BadRequestException("Invalid Email")
        }
        const isMatch = await bcrypt.compare(dto.password, user.password)
        if (!isMatch) throw new BadRequestException("Invalid Password");

        const token = this.jwt.sign({ id: user.id, email: user.email })

        return {
            message: "Login Successful",
            data: user,
            access_token: token
        }
    }
}
