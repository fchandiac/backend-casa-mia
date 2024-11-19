import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CartModule } from '../cart/cart.module';
import {CouponsModule} from '../coupons/coupons.module';


@Module({
  imports: [AuthModule, CartModule, CouponsModule],
  controllers: [],
  providers: [],
})
export class GatewayModule {}
