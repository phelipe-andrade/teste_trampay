import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator'
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );

  const corsOptions: CorsOptions = {
    origin: '*', // Todos os domínios são permitidos
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true, // Permite que o token de autorização seja enviado
    allowedHeaders: 'Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept',
  };
  app.enableCors(corsOptions);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });
 
  await app.listen(3000);
}
bootstrap();
