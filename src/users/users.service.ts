import { Body, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/CreateUser.dto';

@Injectable()
export class UsersService {
     users = [{
        name: "James Ofa",
        email: "jamesofa@gmail.com",
        password: "James12045"
    }, {
        name: "Odinaka mmadu",
        email: "jamesofa@gmail.com",
        password: "James12045"
    }, {
        name: "Adams Johnson",
        email: "jamesofa@gmail.com",
        password: "James12045"
    }, {
        name: "Miracle Ike",
        email: "jamesofa@gmail.com",
        password: "James12045"
    }, {
        name: "Ogbu  Sunday",
        email: "jamesofa@gmail.com",
        password: "James12045"
    }]

    async getUsers(): Promise<any>{
       return this.users
    }

    async createUser(@Body() body: CreateUserDto): Promise<any> {
        const newUser = {...body}
        this.users.push(newUser)
    }

    async getUserById(id: string): Promise<any>{
         return  {id}
    }
}
