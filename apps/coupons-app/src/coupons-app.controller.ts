import { Controller, Get } from '@nestjs/common';
import { CouponsAppService } from './coupons-app.service';

@Controller()
export class CouponsAppController {
  constructor(private readonly couponsAppService: CouponsAppService) {}

  @Get()
  getHello(): string {
    return this.couponsAppService.getHello();
  }
}
