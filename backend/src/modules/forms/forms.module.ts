import { Module } from '@nestjs/common';
import { FormDesignerController } from './form-designer/form-designer.controller';

@Module({
  imports: [],
  controllers: [FormDesignerController],
  providers: [],
})
export class FormsModule {}
