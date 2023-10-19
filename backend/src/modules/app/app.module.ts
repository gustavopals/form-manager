import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../../shared/services/app.service';
import { AppRouterModule } from '../../routes/router/app-router.module';
import { PrismaService } from '../../shared/services/prisma.service';
import { FormsModule } from '../forms/forms.module';
import { DefaultModule } from '../default-example/default.module';

@Module({
  imports: [AppRouterModule, FormsModule, DefaultModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
