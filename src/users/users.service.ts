import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repo: Repository<User>,
    ) { }
    // async create(dto: CreateUserDto) {
    //     const isUser = this.repo.findOne({ where: { email: dto.email } })
    //     if (!isUser) {
    //         throw new BadRequestException("User with this email already exists");
    //     }
    //     const user = this.repo.create(dto);
    //     const saved = await this.repo.save(user)
    //     return {
    //         success: true,
    //         message: "User created successfully",
    //         data: saved,
    //     };

   async create(dto: CreateUserDto) {
    const existingUser = await this.repo.findOne({ where: { email: dto.email } });

    if (existingUser) {
        throw new BadRequestException("User with this email already exists");
    }

    const user = this.repo.create(dto);
    const saved = await this.repo.save(user);

    return {
        success: true,
        message: "User created successfully",
        data: saved,
    };
}



    // }
    // async create(dto: CreateUserDto) {
    //     // Check if email already exists
    //     const existing = await this.repo.findOne({ where: { email: dto.email } });

    //     if (!existing) {
    //         throw new BadRequestException("User with this email already exists");
    //     }

    //     // Create user
    //     const user = this.repo.create(dto);
    //     const saved = await this.repo.save(user);

    //     return {
    //         success: true,
    //         message: "User created successfully",
    //         data: saved,
    //     };
    // }

    // Get all users
    async findAll() {
        return this.repo.find();
    }

    // Get user by Id/email
    // async findByEmail(email: string) {
    //     const user = await this.repo.findOne({ where: { email } })
    //     if (!user) {
    //         throw new BadRequestException("User not found")
    //     }
    //     return user;
    // }
    async findByEmail(email: string) {
    return await this.repo.findOne({ where: { email } });
}

    //  Update user By 
    async updateUser(id: number, dto: UpdateUserDto) {
        const user = await this.repo.findOne({ where: { id } });
        if (!user) {
            throw new BadRequestException("User not found");
        }
        Object.assign(user, dto);
        return this.repo.save(user);
    }

    // Delete User
    async remove(id: number) {
        const user = await this.repo.findOne({ where: { id } })
        if (!user) {
            throw new BadRequestException("User not found")
        }
        return this.repo.remove(user)
    }


}
