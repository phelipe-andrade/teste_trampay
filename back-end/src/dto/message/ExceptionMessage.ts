import { HttpException, HttpStatus } from '@nestjs/common';

export class ExceptionMessage extends HttpException {
  constructor(mensagem: string) {
    super(mensagem, HttpStatus.BAD_REQUEST);
    
  }
}