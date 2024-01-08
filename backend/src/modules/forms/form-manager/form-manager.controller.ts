import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { FormTable } from '@prisma/client';
import { Response } from 'express';
import { PrismaService } from 'src/shared/services/prisma.service';

@Controller('form-manager')
export class FormManagerController {
  constructor(private prisma: PrismaService) {}

  @Get('structure/:id')
  async handleGetStructure(@Param() params, @Res() res: Response) {
    const result = await this.getStructure(parseInt(params.id));
    return res.json(result);
  }

  @Get(':id')
  async handleIndex(@Param() params, @Res() res: Response) {
    const result = await this.index(parseInt(params.id));
    return res.json(result);
  }

  @Get(':idFormTable/:idHeader')
  async handleShow(@Param() params, @Res() res: Response) {
    const result = await this.show(
      parseInt(params.idFormTable),
      parseInt(params.idHeader),
    );
    return res.json(result);
  }

  @Post()
  async handleStoreOrUpdate(@Body() formParams: any, @Res() res: Response) {
    try {
      const result = await this.storeOrUpdate(formParams);
      return res.json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error.message);
    }
  }

  /************************/

  async getStructure(id: number): Promise<FormTable> {
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

  async index(id: number): Promise<any> {
    const result = await this.prisma.formHeader.findMany({
      where: {
        formTableId: id,
      },
    });

    return result;
  }

  async show(idFormTable: number, idHeader: number): Promise<any> {
    const result = await this.prisma.formHeader.findUnique({
      where: {
        id: idHeader,
        formTableId: idFormTable,
      },
    });

    return result;
  }

  async storeOrUpdate(formParams): Promise<any> {
    const { id, formStructure, formData, ...rest } = formParams;

    // const formHeader = await this.prisma.formHeader.create({
    //   data: {
    //     code: '2',
    //     formString: '',
    //     deleted: false,
    //     createdAt: new Date(),
    //     updatedAt: new Date(),
    //     formTable: {
    //       connect: {
    //         id: formStructure.id,
    //       },
    //     },
    //   },
    // });

    const formHeader = await this.prisma.formHeader.upsert({
      where: {
        id: id ?? null,
      },
      update: {
        code: '2',
        formString: '',
      },
      create: {
        code: '2',
        formString: '',
        formTableId: formStructure.id,
        deleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return formHeader;
  }
}
