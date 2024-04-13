import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategyAuth extends PassportStrategy(Strategy) {
  constructor(private authservice: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authservice.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
