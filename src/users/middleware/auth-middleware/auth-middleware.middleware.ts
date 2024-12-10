import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class AuthMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Auth Middleware")
    next();
  }
}
