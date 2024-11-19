import { Module } from '@nestjs/common';
import { CouponsAppController } from './coupons-app.controller';
import { CouponsAppService } from './coupons-app.service';
import { Coupon } from 'libs/entities/coupons/coupon.entity';
import { envs } from 'libs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Coupon]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: envs.database.host,
      port: envs.database.port,
      username: envs.database.user,
      password: envs.database.password,
      database: envs.coupon.databaseName,
      entities: [Coupon],
      synchronize: true,
    }),
  ],
  controllers: [CouponsAppController],
  providers: [CouponsAppService],
})
export class CouponsAppModule {}
