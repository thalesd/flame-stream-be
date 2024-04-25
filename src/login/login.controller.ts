import {
  Body,
  ConflictException,
  Controller,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AllowAnnonymous } from '../auth/decorators/public-route.decorator';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { CreateUserDto } from './models/model.createUserDto';
import { LoginUserDto } from './models/model.loginUserDto';

@Controller()
export class LoginController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @AllowAnnonymous()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Body() body: LoginUserDto) {
    return this.authService.loginUser(body);
  }

  @AllowAnnonymous()
  @Post('/register')
  async getProfile(@Body() body: CreateUserDto) {
    return this.userService.addUser(body);
  }
}
