import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailExist } from 'src/validator/email.validator';


export class UpdatePasswordDTO {
  @IsEmail(undefined, { message: 'O e-mail informado é inválido.' })
  @EmailExist({ message: 'Usuário não cadastrado.' })
  email: string;

  @IsNotEmpty()
  old_password: string;

  @IsNotEmpty()
  @MinLength(6, {message: 'A senha deve ter pelo menos 6 caracteres'})
  new_password: string
}