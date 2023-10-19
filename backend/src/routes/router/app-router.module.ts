import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { DefaultModule } from 'src/modules/default-example/default.module';
import { FormsModule } from 'src/modules/forms/forms.module';

@Module({
  imports: [
    RouterModule.register([
      {
        path: 'forms',
        module: FormsModule,
      },
      {
        path: 'default',
        module: DefaultModule,
      },
    ]),
  ],
})
export class AppRouterModule {}
