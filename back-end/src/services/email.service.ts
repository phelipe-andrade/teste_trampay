import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { ExceptionMessage } from 'src/dto/message/ExceptionMessage';

@Injectable()
export class EmailService {
  async sendPasswordResetEmail(
    email: string,
    newPassword: string,
  ): Promise<void> {
    sgMail.setApiKey(process.env.EMAIL_TOKEN);
    const mensage = {
      to: email,
      from: 'testetrampay@gmail.com',
      subject: 'Assunto do email',
      text: 'Conteúdo do email',
      html: `<strong>
        Nova senha: ${newPassword}
      </strong>`,
    };

    sgMail
      .send(mensage)
      .catch(() => {throw new ExceptionMessage(`Não foi possível enviar a senha para o e-mail: ${email}`);});
  }
}
