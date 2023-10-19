import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello World!',
      description: 'This is a NestJS API for the Form Manager App.',
    };
  }
}
