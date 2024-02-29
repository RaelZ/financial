import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableSwagger } from './swagger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  // app.useGlobalGuards(new AuthGuard());
  enableSwagger(app);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
