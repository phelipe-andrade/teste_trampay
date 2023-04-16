import { IsEmail, IsOptional, MinLength } from 'class-validator';
import { EmailUnique } from 'src/validator/email.validator';

export class UpdateUserDTO {

  @IsOptional()
  name: string;

  @IsEmail(undefined, {message: 'O e-mail informado é inválido'})
  @EmailUnique({message: 'E-mail já cadastrado.'})
  @IsOptional()
  email: string;

  @MinLength(6, {message: 'A senha deve ter pelo menos 6 caracteres'})
  @IsOptional()
  password: string;
}
