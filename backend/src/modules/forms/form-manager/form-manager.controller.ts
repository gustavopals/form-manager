import { Controller, Get, Param, Res } from '@nestjs/common';
import { FormTable } from '@prisma/client';
import { Response } from 'express';
import { PrismaService } from 'src/shared/services/prisma.service';

@Controller('form-manager')
export class FormManagerController {
  constructor(private prisma: PrismaService) {}

  @Get(':id')
  async handleGetStructure(@Param() params, @Res() res: Response) {
    const result = await this.getStructure(parseInt(params.id));
    return res.json(result);
  }

  /************************/

  async getStructure(id): Promise<FormTable> {
    const result = await this.prisma.formTable.findUnique({
      where: {
        id,
      },
      include: {
        FormField: {
          where: {
            deleted: false,
          },
        },
      },
    });

    return result;
  }
}
