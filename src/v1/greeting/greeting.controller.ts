import { Controller, Get, Param } from '@nestjs/common';

@Controller({
  path: 'greeting',
  version: ['1', '2'],
})
export class GreetingController {
  @Get()
  defaultGreeting() {
    return 'Hi from v1';
  }

  @Get(':message')
  messageGreeting(@Param('message') message: string) {
    return `Hi ${message}`;
  }
}
