import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/services/prisma.service';
import { TabelaTesteController } from './tabela-teste/tabela-teste.controller';
import { TabelaTesteUseCase } from './tabela-teste/tabela-teste.use-case';

@Module({
  imports: [],
  controllers: [TabelaTesteController],
  providers: [PrismaService, TabelaTesteUseCase],
})
export class TesteModule {}
