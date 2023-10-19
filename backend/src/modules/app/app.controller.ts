import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from '../../shared/services/app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    return res.json(this.appService.getHello());
  }
}
