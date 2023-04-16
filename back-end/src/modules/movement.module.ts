import {
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';

import { MovementController } from 'src/controllers/movement.controller';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { MovementService } from 'src/services/movement.service';

@Module({
  controllers: [MovementController],
  providers: [MovementService],
})
export class MovementModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(MovementController);
  }
}
