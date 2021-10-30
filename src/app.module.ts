import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreetingController } from './v1/greeting/greeting.controller';

@Module({
  controllers: [AppController, GreetingController],
  providers: [AppService],
})
export class AppModule {}
