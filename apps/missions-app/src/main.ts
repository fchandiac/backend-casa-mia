import { NestFactory } from '@nestjs/core';
import { MissionsAppModule } from './missions-app.module';

async function bootstrap() {
  const app = await NestFactory.create(MissionsAppModule);
  await app.listen(3000);
}
bootstrap();
