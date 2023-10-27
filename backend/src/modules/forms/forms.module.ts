import { Module } from '@nestjs/common';
import { FormDesignerController } from './form-designer/form-designer.controller';
import { FormManagerController } from './form-manager/form-manager.controller';
import { PrismaService } from 'src/shared/services/prisma.service';

@Module({
  imports: [],
  controllers: [FormDesignerController, FormManagerController],
  providers: [PrismaService],
})
export class FormsModule {}
