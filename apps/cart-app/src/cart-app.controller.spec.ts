import { Test, TestingModule } from '@nestjs/testing';
import { CartAppController } from './cart-app.controller';
import { CartAppService } from './cart-app.service';

describe('CartAppController', () => {
  let cartAppController: CartAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CartAppController],
      providers: [CartAppService],
    }).compile();

    cartAppController = app.get<CartAppController>(CartAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cartAppController.getHello()).toBe('Hello World!');
    });
  });
});
