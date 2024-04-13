import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AllowAnnonymous } from 'src/auth/decorators/public-route.decorator';

@Controller('login')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @AllowAnnonymous()
  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Request() req) {
    return this.authService.loginUser(req.user);
  }

  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
