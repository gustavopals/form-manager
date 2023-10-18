import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { FormsModule } from 'src/modules/forms/forms.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'forms',
        module: FormsModule,
      },
    ]),
  ],
})
export class AppRouterModule {}
