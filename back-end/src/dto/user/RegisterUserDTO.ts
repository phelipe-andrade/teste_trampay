import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailUnique } from 'src/validator/email.validator';

export class RegisterUserDTO {

  @IsNotEmpty({message: 'O nome deve ser preenchido.'})
  name: string;

  @IsEmail(undefined, {message: 'O e-mail informado é inválido'})
  @EmailUnique({message: 'E-mail já cadastrado.'})
  email: string;

  @MinLength(6, {message: 'A senha deve ter pelo menos 6 caracteres'})
  password: string;
}
