import { Controller, Get } from '@nestjs/common';
import { CartAppService } from './cart-app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CartAppController {
  constructor(private readonly cartAppService: CartAppService) {}

  // Maneja el mensaje de salud (health check)
  @MessagePattern({ cmd: 'cart-health' })
  async health(): Promise<string> {
    return this.cartAppService.health();
  }
}
