import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthAppService {
  async health(): Promise<string> {
    return 'Auth Microservice is healthy';
  }
}
