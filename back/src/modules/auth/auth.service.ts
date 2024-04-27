import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { isEmail } from 'class-validator';
import { User } from 'src/entities';
import {
  decodeToken,
  decryptPassword,
  encryptPassword,
  generateToken,
  isTokenExpired,
} from 'src/utils/funcs';
import { UsersService } from '../users/users.service';
import { ILogin } from './interfaces/login.dto';
import { IRecoverPassword } from './interfaces/recover-password.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async login(user: ILogin) {
    const { password, email, username } = user;
    this.validateLoginInput(user);

    const where = email ? { email } : { username };
    const userFound = await this.fetchUser(where);

    this.verifyPassword(password, userFound.password);

    const token = generateToken({ password: userFound.password, ...userFound });

    return { token, userFound };
  }

  async renewToken(jwt: string) {
    const isExpired = isTokenExpired(jwt);

    if (isExpired) {
      const user = decodeToken(jwt);
      const token = generateToken(user);
      return { token, user };
    }
    return { token: jwt, user: decodeToken(jwt) };
  }

  async recoverPassword(jwt: string, passwords: IRecoverPassword) {
    const { password, newPassword } = passwords;
    const decodedUser = decodeToken(jwt);

    const user = await this.fetchUser({ id: decodedUser.id });

    this.verifyPassword(password, user.password);

    await this.usersService.update(user.id, {
      password: encryptPassword(newPassword),
    });
  }

  private validateLoginInput(user: ILogin): void {
    if (!user.email && !user.username) {
      throw new BadRequestException('Email or username is required');
    }
    if (user.email && !isEmail(user.email)) {
      throw new BadRequestException('Email is invalid');
    }
    if (!user.password) {
      throw new BadRequestException('Password is required');
    }
  }

  private async fetchUser(where: object): Promise<User> {
    const [user] = await this.usersService.find(where);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  private verifyPassword(
    enteredPassword: string,
    storedPassword: string,
  ): void {
    const isPasswordCorrect = decryptPassword(enteredPassword, storedPassword);
    if (!isPasswordCorrect) {
      throw new BadRequestException('Login or Password is incorrect');
    }
  }
}
