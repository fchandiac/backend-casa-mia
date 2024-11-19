import { Controller, Get } from '@nestjs/common';
import { CartAppService } from './cart-app.service';

@Controller()
export class CartAppController {
  constructor(private readonly cartAppService: CartAppService) {}

  @Get()
  getHello(): string {
    return this.cartAppService.getHello();
  }
}
