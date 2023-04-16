import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { ConfigModule } from './config.module';
import { PasswordModule } from './password.module';
import { MovementModule } from './movement.module';

@Module({
  imports: [ConfigModule, UserModule, PasswordModule, MovementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
