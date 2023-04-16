import { IsEmail } from 'class-validator';
import { EmailExist } from 'src/validator/email.validator';

export class ResetPasswordDTO {
  @IsEmail(undefined, { message: 'O e-mail informado é inválido.' })
  @EmailExist({ message: 'Usuário não cadastrado.' })
  email: string;
}
