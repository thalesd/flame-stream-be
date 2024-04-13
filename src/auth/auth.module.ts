import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LocalStrategyAuth } from 'src/auth/local-strategy.service';
import { UsersModule } from 'src/users/users.module';
import { jwtConstants } from './auth.constants';
import { JwtStrategy } from './jwt-auth.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, LocalStrategyAuth, JwtStrategy],
  exports: [AuthService, LocalStrategyAuth],
})
export class AuthModule {}
