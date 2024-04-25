import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './models/model.user';
import { Profile, UserProfileDto } from './models/model.profile';
import { CreateUserDto } from 'src/login/models/model.createUserDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Profile.name) private profileModel: Model<Profile>,
  ) {}

  async addUser(newUser: CreateUserDto): Promise<User | undefined> {
    try {
      const createdUser = await new this.userModel(newUser).save();

      if (createdUser._id != null) {
        const defaultProfile: UserProfileDto = {
          userId: createdUser._id,
          name: 'Default',
          image: 'default-profile-img.png',
          age: 21,
        };

        await this.addProfile(defaultProfile);
      }

      return createdUser;
    } catch (ex: any) {
      console.log(ex.code);
      throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
  }

  async addProfile(newProfile: UserProfileDto): Promise<Profile> {
    return await new this.profileModel(newProfile).save();
  }

  async getUser(username: string): Promise<User> {
    return await this.userModel.findOne({ username }).exec();
  }
}
