import { Test, TestingModule } from '@nestjs/testing';
import { MissionsAppController } from './missions-app.controller';
import { MissionsAppService } from './missions-app.service';

describe('MissionsAppController', () => {
  let missionsAppController: MissionsAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MissionsAppController],
      providers: [MissionsAppService],
    }).compile();

    missionsAppController = app.get<MissionsAppController>(MissionsAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(missionsAppController.getHello()).toBe('Hello World!');
    });
  });
});
