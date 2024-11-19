// apps/gateway/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { envs } from 'libs/config';
import { CouponsController } from './coupons.controller';

@Module({
  imports: [
    ClientsModule.register([
        {
          name: 'COUPONS_SERVICE',  // Nombre del cliente para la inyección
          transport: Transport.RMQ,
          options: {
            urls: [envs.rabbitmq.url],
            queue: 'coupons_queue',
            noAck: true,
            queueOptions: {
              durable: true,
            },
          },
        },
      ]),
  ],
  controllers: [CouponsController],  // El controlador para manejar las rutas relacionadas con la autenticación
})
export class CouponsModule {}
