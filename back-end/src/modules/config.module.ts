import { Module, Global } from '@nestjs/common';
import { PrismaService } from 'src/db/PrismaService';
import { AuthService } from 'src/services/auth.service';

@Global()
@Module({
  providers: [PrismaService, AuthService],
  exports: [PrismaService, AuthService],
})
export class ConfigModule {}
