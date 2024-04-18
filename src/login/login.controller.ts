import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AllowAnnonymous } from '../auth/decorators/public-route.decorator';
import { AuthService } from '../auth/auth.service';
import { UsersService } from '../users/users.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { CreateUserDto } from 'src/users/users.model';

@Controller()
export class LoginController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @AllowAnnonymous()
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Request() req) {
    return this.authService.loginUser(req.user);
  }

  @AllowAnnonymous()
  @Post('/register')
  async getProfile(@Body() body: CreateUserDto) {
    return this.userService.addUser(body);
  }
}
