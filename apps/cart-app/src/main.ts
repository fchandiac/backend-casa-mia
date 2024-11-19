import { NestFactory } from '@nestjs/core';
import { CartAppModule } from './cart-app.module';

async function bootstrap() {
  const app = await NestFactory.create(CartAppModule);
  await app.listen(3000);
}
bootstrap();
