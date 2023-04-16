import { Module } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';

@Module({
  providers: [AuthService, UserService],
  exports: [AuthService],
})
export class AuthModule {}