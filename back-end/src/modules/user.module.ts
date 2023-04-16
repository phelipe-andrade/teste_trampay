import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { EmailService } from 'src/services/email.service';
import { UserService } from 'src/services/user.service';
import { EmailUniqueValidator, EmailExistValidator } from 'src/validator/email.validator';

@Module({
  controllers: [UserController],
  providers: [UserService, EmailService, EmailUniqueValidator, EmailExistValidator],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes(
        { path: 'user', method: RequestMethod.PUT },
        { path: 'user', method: RequestMethod.GET }
      )
  }
}
