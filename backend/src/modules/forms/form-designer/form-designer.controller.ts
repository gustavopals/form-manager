import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { PrismaService } from 'src/shared/services/prisma.service';

@Controller('form-designer')
export class FormDesignerController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async index(@Res() res: Response) {
    const result = await this.prisma.formTable.findMany({
      where: {
        deleted: false,
      },
      include: {
        FormField: true,
      },
    });

    return res.json(result);
  }

  @Get(':id')
  async show(@Param() params, @Res() res: Response) {
    const result = await this.prisma.formTable.findUnique({
      where: {
        id: parseInt(params.id),
      },
      include: {
        FormField: true,
      },
    });
    return res.json(result);
  }

  @Post()
  async storeOrUpdate(@Body() formTable: any, @Res() res: Response) {
    try {
      const { id, ...rest } = formTable;
      const result = await this.prisma.formTable.upsert({
        where: {
          id: id,
        },
        update: rest,
        create: rest,
        include: {
          FormField: true,
        },
      });
      return res.json(result);
    } catch (error) {
      return res.json(error).status(500);
    }
  }
}
