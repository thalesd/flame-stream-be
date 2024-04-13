import { Injectable } from '@nestjs/common';
import { LocalStrategyAuth } from 'src/auth/local-strategy.service';

@Injectable()
export class LoginService {
  constructor(private readonly localStrategyAuthservice: LocalStrategyAuth) {}

  login(username: string, password: string): any {
    return this.localStrategyAuthservice.validate(username, password);
  }
}
