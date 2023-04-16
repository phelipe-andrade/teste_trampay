import { IsEmail, IsNotEmpty } from 'class-validator';
import { EmailExist } from 'src/validator/email.validator';

export class LoginUserDTO {
  @IsEmail(undefined, { message: 'O e-mail informado é inválido.' })
  @EmailExist({message: 'Usuário não cadastrado.'})
  email: string;

  @IsNotEmpty({message: 'Não foi informado a senha.'})
  password: string;
}
