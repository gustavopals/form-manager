import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('form-designer')
export class FormDesignerController {
  @Get()
  index(@Res() res: Response) {
    return res.json({
      message: 'Hello World!',
    });
  }
}
