import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/model.user';
import { Profile, ProfileSchema } from './models/model.profile';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Profile.name, schema: ProfileSchema}]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
