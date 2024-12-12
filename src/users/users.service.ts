import { Body, HttpCode, HttpException, HttpStatus, Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateUserDetails } from './utils/types';
import { InjectModel } from '@nestjs/mongoose';
import { Profile } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { CreateUserDto } from './dtos/CreateUser.dto';


@Injectable()
export class UsersService {
 constructor(
    @InjectModel(Profile.name)
    private profileModel: Model<Profile>
    ) {}
   

    async getUsers(): Promise<Profile[]> {
       const users = await this.profileModel.find()
       if(!users) {
        throw new HttpException("No user found", HttpStatus.NOT_FOUND)
       }

       return users
    }

    async createUser(signupDto: CreateUserDto): Promise<{email: any}>{
       const  {email, password, name, role} = signupDto;
       // generate salt
       const salt = await bcrypt.genSalt(10);

       const hashPassword = await bcrypt.hash(password, salt)

       if(!hashPassword) {
        throw new NotAcceptableException("Password must be hashed")
       }

       // generate new user
       await this.profileModel.create({
        email, 
        name,
        role,
        password: hashPassword
       })

       return {email}   
    }

    async getUserById(id: string){
         return {id}
    }
}


