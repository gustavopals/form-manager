import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './modules/forms/forms.module';
import { AppRouterModule } from './routes/router/app-router.module';
import { PrismaService } from './shared/services/prisma.service';

@Module({
  imports: [FormsModule, AppRouterModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
