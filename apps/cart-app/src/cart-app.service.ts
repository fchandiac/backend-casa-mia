import { Injectable } from '@nestjs/common';

@Injectable()
export class CartAppService {
  async health(): Promise<string> {
    return 'Cart Microservice is healthy';
  }
}
