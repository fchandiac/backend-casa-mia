import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CouponsAppService } from './coupons-app.service';

@Controller()
export class CouponsAppController {
  constructor(private readonly CouponAppService: CouponsAppService) {}

  // Maneja el mensaje de salud (health check)
  @MessagePattern({ cmd: 'coupon-health' })
  async health(): Promise<string> {
    return this.CouponAppService.health();
  }
}
