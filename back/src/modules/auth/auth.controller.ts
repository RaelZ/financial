import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import { getToken } from 'src/utils/funcs';
import { AuthService } from './auth.service';
import { ILogin } from './interfaces/login.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async create(@Body() user: ILogin) {
    const res = await this.authService.login(user);
    return { message: 'Success', data: res, statusCode: 201 };
  }

  @Post('renew-token')
  @UseGuards(new AuthGuard())
  async renewToken(@Headers('Authorization') authHeader: string) {
    const jwt = getToken(authHeader);
    const res = await this.authService.renewToken(jwt);
    return { message: 'Success', data: res, statusCode: 201 };
  }
}
