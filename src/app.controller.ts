import { Controller, Get } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({description: 'Returns server status.'})
  @Get('status')
  getHello(): number {
    return this.appService.getStatus();
  }
}
