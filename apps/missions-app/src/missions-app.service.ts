import { Injectable } from '@nestjs/common';

@Injectable()
export class MissionsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
