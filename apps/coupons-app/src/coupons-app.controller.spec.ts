import { Test, TestingModule } from '@nestjs/testing';
import { CouponsAppController } from './coupons-app.controller';
import { CouponsAppService } from './coupons-app.service';

describe('CouponsAppController', () => {
  let couponsAppController: CouponsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CouponsAppController],
      providers: [CouponsAppService],
    }).compile();

    couponsAppController = app.get<CouponsAppController>(CouponsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(couponsAppController.getHello()).toBe('Hello World!');
    });
  });
});
