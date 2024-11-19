import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';



@Controller('cart')
export class CartController {
  // Inyección del cliente de RabbitMQ
  constructor(
    @Inject('CART_SERVICE') private readonly client: ClientProxy, // Inyecta el cliente registrado
  ) {}

  @Get('cartMicroserviceHealth')
  async microServiceHealth(): Promise<string> {
    //@ts-ignore
    return this.client.send<string>({ cmd: 'cart-health' }, {});
    //return 'Auth Gateway Service is healthy';
  }

  @Get('health')
  async health(): Promise<string> {
    return 'Cart Gateway Service is healthy';
  }

}
