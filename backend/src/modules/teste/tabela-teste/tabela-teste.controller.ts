import { Controller, Get, Param, Query, Res } from '@nestjs/common';
import { TabelaTesteUseCase } from './tabela-teste.use-case';
import { Response } from 'express';
import { ErrorHelper } from 'src/shared/helpers/error';

interface QueryParams {
  filter: string;
  order: string;
  page: number;
  pageSize: number;
}

@Controller('tabela-teste')
export class TabelaTesteController {
  constructor(private useCase: TabelaTesteUseCase) {}

  @Get()
  async index(@Query() queryParams, @Res() res: Response) {
    try {
      const { filter, order, page, pageSize }: QueryParams = queryParams;

      const data = await this.useCase.index(filter, order, page, pageSize);

      return res.json({
        hasNext: false,
        page,
        pageSize,
        items: data,
      });
    } catch (error) {
      return ErrorHelper.handleError(error, res);
    }
  }

  @Get(':id')
  async show(@Param() params, @Res() res: Response) {
    const data = await this.useCase.show(Number(params.id));
    return res.json(data);
  }

  storeOrUpdate() {}

  delete() {}
}
