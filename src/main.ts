import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable /vx/ for all paths
  app.enableVersioning();

  await app.listen(3000);
}
bootstrap();
