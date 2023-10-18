import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormsModule } from './modules/forms/forms.module';
import { AppRouterModule } from './routes/router/app-router.module';

@Module({
  imports: [FormsModule, AppRouterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
