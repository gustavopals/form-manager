import { Module } from '@nestjs/common';
import { DefaultController } from './default-controller/default.controller';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  imports: [],
  controllers: [DefaultController],
  providers: [PrismaService],
})
export class DefaultModule {}
