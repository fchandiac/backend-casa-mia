import { NestFactory } from '@nestjs/core';
import { CouponsAppModule } from './coupons-app.module';

async function bootstrap() {
  const app = await NestFactory.create(CouponsAppModule);
  await app.listen(3000);
}
bootstrap();
