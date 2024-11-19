import { Controller, Get } from '@nestjs/common';
import { MissionsAppService } from './missions-app.service';

@Controller()
export class MissionsAppController {
  constructor(private readonly missionsAppService: MissionsAppService) {}

  @Get()
  getHello(): string {
    return this.missionsAppService.getHello();
  }
}
