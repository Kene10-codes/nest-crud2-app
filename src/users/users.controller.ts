import { Body, Controller, Get, Post, Param, Req, Res, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { request } from 'http';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}


    @Get()
    async getAllUsers(@Query("email") email: string): Promise<any>{
        let users = this.usersService.getUsers()
        return users
    }

    @Post("create-user")
    @UsePipes(new ValidationPipe())
    async createUsers(@Req() request: Request, @Res() response: Response, userData: CreateUserDto): Promise<any> {
        return this.usersService.createUser(userData)
    }

    @Get(":/id")
    async getUserById(@Param("id") id: string) {
         let user = this.usersService.getUserById(id)
    }
}
