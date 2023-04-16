import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { ExceptionMessage } from 'src/dto/message/ExceptionMessage';
import { CustomRequest } from 'src/protocols/CustomRequest';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly authService: AuthService
  ){}

  use(req: CustomRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) throw new ExceptionMessage('Token inválido ou não informado.');
    const id = this.authService.validateToken(token);
    if (!id) throw new ExceptionMessage('Token inválido');
    req.id = id;
    
    next();
  }
}
