import { Module } from '@nestjs/common';
import { CartAppController } from './cart-app.controller';
import { CartAppService } from './cart-app.service';

@Module({
  imports: [],
  controllers: [CartAppController],
  providers: [CartAppService],
})
export class CartAppModule {}
