import { Injectable } from '@nestjs/common';

@Injectable()
export class CouponsAppService {
  async health(): Promise<string> {
    return 'Coupon Microservice is healthy';
  }
}
