import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { verifyToken } from 'src/utils/funcs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    if (!authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid authentication token format');
    }

    const token = authHeader.substring(7);
    return this.validateToken(token);
  }

  private async validateToken(token: string): Promise<boolean> {
    try {
      const isValid = await verifyToken(token);
      if (!isValid) {
        throw new UnauthorizedException('Invalid token');
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException(
        'Token validation error: ' + error.message,
      );
    }
  }
}
