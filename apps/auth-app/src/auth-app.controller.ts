import { Controller, Get } from '@nestjs/common';
import { AuthAppService } from './auth-app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AuthAppController {
  constructor(private readonly authAppService: AuthAppService) {}

  // Maneja el mensaje de salud (health check)
  @MessagePattern({ cmd: 'health' })
  async health(): Promise<string> {
    return this.authAppService.health(); // Delegamos la lógica al servicio
  }
}
