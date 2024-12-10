import { Body, Injectable } from '@nestjs/common';
import { CreateUserDetails } from './utils/types';

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

    async getUsers() {
       return this.users
    }

    async createUser(userDetails: CreateUserDetails){
       return this.users.push(userDetails)
    }

    async getUserById(id: string){
         return {id}
    }
}


