import { Injectable, Scope } from '@nestjs/common';
import { User } from './users.model';

@Injectable()
export class UsersService {
  async getUser(username: string): Promise<User | undefined> {
    return {
      id: '1',
      name: 'test',
      password: '123',
      username,
    };
  }
}
