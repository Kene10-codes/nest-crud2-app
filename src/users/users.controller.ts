import { Body, Controller, Get, Post, Param, Req, Res, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}
    @Get()
    async getAllUsers(@Query("email") email: string): Promise<any>{
        let users = this.usersService.getUsers()
        return users
    }

    @Post('register')
    @UsePipes(new ValidationPipe())
    async createUsers(@Body() userData: CreateUserDto): Promise<any> {
        this.usersService.createUser(userData)
        return
    }

    @Get(":/id")
    async getUserById(@Param("id") id: string) {
         let user = this.usersService.getUserById(id)
    }
}
