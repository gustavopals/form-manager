import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const serverUrl = process.env.SERVER_URL || 'http://localhost';
  const port = process.env.PORT || 3000;

  await app.listen(port).then(() => {
    console.log(`Server is running on ${serverUrl}:${port}`);
  });
}
bootstrap();
