import { Body, Controller, Get, Post, Param, Req, Res, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';
import { ValidateCreateUserPipe } from './pipes/validate-create-user/validate-create-user.pipe';
import { Roles } from './decorator/roles.decorator';
import { Role } from './enum/roles.enum';
import { RolesGuard } from './guard/roles-guard/roles-guard.guard';

@Controller('users')
@UseGuards(RolesGuard)
export class UsersController {
    constructor(private usersService: UsersService){}
    @Get()
    async getAllUsers(): Promise<any>{
        let users = this.usersService.getUsers()
        return users
    }

    @Post('register')
    @Roles(Role.Admin)
    @UsePipes(new ValidationPipe())
    async createUsers(@Body(ValidateCreateUserPipe) userData: CreateUserDto): Promise<any> {
        this.usersService.createUser(userData)
        return
    }

    @Get(":/id")
    async getUserById(@Param("id", ParseIntPipe) id: string) {
         let user = this.usersService.getUserById(id)
    }
}
