import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
// import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post()
    // @ApiResponse({ status: 201, description: 'User created successfully', type: CreateUserDto })
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }
    @UseGuards(AuthGuard('jwt'))
    @Get()
    findAll() {
        return this.userService.findAll();
    }
    @Get(':email')
    findOne(@Param('email') eamil: string) {
        return this.userService.findByEmail((eamil));
    }
    // UPDATE
    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdateUserDto
    ) {
        return this.userService.updateUser(id, dto);
    }


    // DELETE
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(Number(id));
    }
}
