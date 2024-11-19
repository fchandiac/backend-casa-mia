import { Module } from '@nestjs/common';
import { MissionsAppController } from './missions-app.controller';
import { MissionsAppService } from './missions-app.service';

@Module({
  imports: [],
  controllers: [MissionsAppController],
  providers: [MissionsAppService],
})
export class MissionsAppModule {}
