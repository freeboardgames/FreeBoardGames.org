import { Controller, Get } from '@nestjs/common';

@Controller('healthz')
export class HealthzController {
  @Get()
  healthz(): string {
    return 'OK';
  }
}
