import { NestFactory } from '@nestjs/core';
import { ImagesAppModule } from './images-app.module';

async function bootstrap() {
  const app = await NestFactory.create(ImagesAppModule);
  await app.listen(3000);
}
bootstrap();
