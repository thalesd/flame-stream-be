import { Injectable } from '@nestjs/common';
import { CreateUserDto, User } from './users.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async addUser(newUser: CreateUserDto): Promise<User | undefined>{
    const createdUser = new this.userModel(newUser);
    createdUser.save();
    return createdUser;
  }

  async getUser(username: string): Promise<User> {    
    let user = this.userModel.findOne({username}).exec();
    return user;
  }
}
