import { Module } from '@nestjs/common';
import { AuthAppController } from './auth-app.controller';
import { AuthAppService } from './auth-app.service';
import { User } from 'libs/entities/auth/user.entity';
import { Account } from 'libs/entities/auth/account.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from 'libs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Account]),
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: envs.database.host,
        port: envs.database.port,
        username: envs.database.user,
        password: envs.database.password,
        database: envs.database.authDatabaseName,
        entities: [User, Account],
        synchronize: true,
      }),
  ],
  controllers: [AuthAppController],
  providers: [AuthAppService],
})
export class AuthAppModule {}
