import { HttpException, HttpStatus, Injectable, NestMiddleware, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddlewareMiddleware implements NestMiddleware {
  use(@Req() request: Request, @Res() response: Response, next: () => void) {
   
    const { authorization } = request.headers

    if(!authorization) {
      throw new HttpException("No Authorization provided", HttpStatus.FORBIDDEN)
    } 

    if(authorization === "hi67r8gv tcxz6rf09ypibicviugiuk") next()
    else {
       throw new HttpException("Authorization token is incorrect", HttpStatus.FORBIDDEN)
    }
  }
}
