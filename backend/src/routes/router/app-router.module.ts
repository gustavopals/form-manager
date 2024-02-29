import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { DefaultModule } from 'src/modules/default-example/default.module';
import { FormsModule } from 'src/modules/forms/forms.module';
import { TesteModule } from 'src/modules/teste/teste.module';

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
      {
        path: 'teste',
        module: TesteModule,
      },
    ]),
  ],
})
export class AppRouterModule {}
