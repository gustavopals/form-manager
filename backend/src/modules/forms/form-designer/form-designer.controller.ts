/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { FormTable } from '@prisma/client';
import { Request, Response } from 'express';
import { PrismaService } from 'src/shared/services/prisma.service';

@Controller('form-designer')
export class FormDesignerController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handleIndex(@Res() res: Response) {
    const result = await this.index();
    return res.json(result);
  }

  @Get(':id')
  async handleShow(@Param() params, @Res() res: Response) {
    const result = await this.show(parseInt(params.id));
    return res.json(result);
  }

  @Post()
  async handleStoreOrUpdate(@Body() formTable: any, @Res() res: Response) {
    try {
      const result = await this.storeOrUpdate(formTable);
      return res.json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Delete()
  async handleDelete(@Req() req: Request, @Res() res: Response) {
    try {
      const data: any = req.query;
      const result = await this.delete(parseInt(data.id));
      return res.json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  /************************/

  async index(): Promise<FormTable[]> {
    const result = await this.prisma.formTable.findMany({
      where: {
        deleted: false,
      },
    });

    return result;
  }

  async show(id: number): Promise<FormTable> {
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

  async storeOrUpdate(formTable): Promise<FormTable> {
    const { id, FormField, ...rest } = formTable;
    const result = await this.prisma.formTable.upsert({
      where: {
        id: id,
        tableName: rest.tableName,
      },
      update: rest,
      create: rest,
      include: {
        FormField: true,
      },
    });

    // delete all form fields
    await this.prisma.formField.updateMany({
      where: {
        formTableId: result.id,
      },
      data: {
        deleted: true,
      },
    });
    // create new form fields
    for (const { id, ...formField } of FormField) {
      await this.prisma.formField.create({
        data: {
          ...formField,
          formTableId: result.id,
        },
      });
    }

    return result;
  }

  async delete(id: number): Promise<FormTable> {
    const result = await this.prisma.formTable.update({
      where: {
        id,
      },
      data: {
        deleted: true,
      },
    });

    // delete all form fields
    await this.prisma.formField.updateMany({
      where: {
        formTableId: id,
      },
      data: {
        deleted: true,
      },
    });

    return result;
  }
}
