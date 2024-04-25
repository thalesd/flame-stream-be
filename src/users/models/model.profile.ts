import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes, Types } from 'mongoose';
import { User } from './model.user';

export type ProfileDocument = HydratedDocument<Profile>;

@Schema()
export class Profile {
  @Prop({ type: SchemaTypes.ObjectId, ref: User.name })
  userId: Types.ObjectId;
  @Prop()
  name: string;
  @Prop()
  image: string;
  @Prop()
  age: number;
}
export const ProfileSchema = SchemaFactory.createForClass(Profile);

export type UserProfileDto = {
  userId: Types.ObjectId;
  name: string;
  image: string;
  age: number;
};
