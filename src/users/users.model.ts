import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  rememberMe: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

export type CreateUserDto = {
  username: string;
  password: string;
  rememberMe: boolean;
};