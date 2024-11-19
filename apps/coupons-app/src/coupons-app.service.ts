import { Injectable } from '@nestjs/common';

@Injectable()
export class CouponsAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
