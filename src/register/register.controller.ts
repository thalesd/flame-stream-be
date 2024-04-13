import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  register(
    @Body('userName') userName: string,
    @Body('password') password: string,
  ): Object {
    return this.registerService.register(userName, password);
  }
}
