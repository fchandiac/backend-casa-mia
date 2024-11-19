import { Module } from '@nestjs/common';
import { CouponsAppController } from './coupons-app.controller';
import { CouponsAppService } from './coupons-app.service';

@Module({
  imports: [],
  controllers: [CouponsAppController],
  providers: [CouponsAppService],
})
export class CouponsAppModule {}
