import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { ResetPasswordDTO } from 'src/dto/password/ResetPasswordDTO';
import { generateRandomPassword } from 'src/helper/generateRandomPassword';
import { AuthService } from './auth.service';
import { EmailService } from './email.service';
import { UpdatePasswordDTO } from 'src/dto/password/UpdatePassword.DTO';
import { TokenUserDTO } from 'src/dto/user/TokenUserDTO';
import { MessageDTO } from 'src/dto/message/MessageDTO';
import { ExceptionMessage } from 'src/dto/message/ExceptionMessage';

@Injectable()
export class PasswordService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly authService: AuthService,
    private readonly emailService: EmailService,
  ) {}

  async resetPassword({ email }: ResetPasswordDTO): Promise<MessageDTO> {
    const newPassword = generateRandomPassword(10);
    const hashPassword = await this.authService.hashPassword(newPassword);

    await this.prismaService.user.update({
      where: { email },
      data: { password: hashPassword },
    });

    await this.emailService.sendPasswordResetEmail(
      email,
      newPassword,
    );
    return new MessageDTO([`Nova senha enviada para o e-mail: ${email}`])
  }

  async updatePassword({
    email,
    old_password,
    new_password,
  }: UpdatePasswordDTO): Promise<TokenUserDTO> {
    const user = await this.prismaService.user.findUnique({ where: { email } });
    if (!user) throw new ExceptionMessage('Usuario não cadastrado.');

    const userValid = await this.authService.validatePassword(
      old_password,
      user.password,
    );
    if (!userValid) throw new ExceptionMessage('Senha de confirmação inválida.');

    const hashPassword = await this.authService.hashPassword(new_password);

    await this.prismaService.user.update({
      where: { id: user.id },
      data: { password: hashPassword },
    });

    return this.authService.login(user.id);
  }
}
