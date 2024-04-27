import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import { getToken } from 'src/utils/funcs';
import { AuthService } from './auth.service';
import { ILogin } from './interfaces/login.dto';
import { IRecoverPassword } from './interfaces/recover-password.dto';

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

  @Post('recover-password')
  @UseGuards(new AuthGuard())
  async recoverPassword(
    @Headers('Authorization') authHeader: string,
    @Body() passwords: IRecoverPassword,
  ) {
    const jwt = getToken(authHeader);
    await this.authService.recoverPassword(jwt, passwords);
    return { message: 'Success', statusCode: 201 };
  }
}
