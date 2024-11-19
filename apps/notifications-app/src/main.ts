import { NestFactory } from '@nestjs/core';
import { NotificationsAppModule } from './notifications-app.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsAppModule);
  await app.listen(3000);
}
bootstrap();
