import { Test, TestingModule } from '@nestjs/testing';
import { HealthzController } from './healthz.controller';
import { HttpModule, HttpService } from '@nestjs/common';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('Healthz Controller', () => {
  let controller: HealthzController;
  let module: TestingModule;
  let httpService: HttpService;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [HttpModule.register({})],
      controllers: [HealthzController],
    }).compile();

    controller = module.get<HealthzController>(HealthzController);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return OK', async () => {
    const result: AxiosResponse = {
      data: {
        foo: 'Bar',
      },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };
    jest.spyOn(httpService, 'post').mockImplementationOnce(() => of(result));
    expect(await controller.healthz()).toEqual('OK');
  });
});
