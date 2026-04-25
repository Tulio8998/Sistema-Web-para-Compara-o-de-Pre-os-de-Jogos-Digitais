import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { LocalAuthGuard } from './strategies/local-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return req.user;
  }
}
