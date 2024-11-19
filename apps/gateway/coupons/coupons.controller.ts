import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';



@Controller('coupons')
export class CouponsController {
  // Inyección del cliente de RabbitMQ
  constructor(
    @Inject('COUPONS_SERVICE') private readonly client: ClientProxy, // Inyecta el cliente registrado
  ) {}

  @Get('couponsMicroserviceHealth')
  async microServiceHealth(): Promise<string> {
    //@ts-ignore
    return this.client.send<string>({ cmd: 'cart-health' }, {});
    //return 'coupons Gateway Service is healthy';
  }

  @Get('health')
  async health(): Promise<string> {
    return 'coupons Gateway Service is healthy';
  }

}
