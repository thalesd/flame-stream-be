import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './auth.constants';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUser(username);

    if (user && user.password === password) {
      const { password, ...rest } = user;
      return rest;
    }

    return null;
  }

  async loginUser(user: any) {
    const payload = { username: user.username, sub: user.username };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: jwtConstants.expiresIn,
      }),
    };
  }
}
