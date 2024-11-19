import { Injectable } from '@nestjs/common';

@Injectable()
export class CartAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
