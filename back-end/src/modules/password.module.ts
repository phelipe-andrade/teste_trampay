import { Module } from '@nestjs/common';
import { PasswordController } from 'src/controllers/password.controller';
import { EmailService } from 'src/services/email.service';
import { PasswordService } from 'src/services/password.service';

@Module({
  controllers: [PasswordController],
  providers: [PasswordService, EmailService],
})
export class PasswordModule {}
