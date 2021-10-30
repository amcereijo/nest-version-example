import { Controller, Delete, Get } from '@nestjs/common';

@Controller({
  path: 'greeting',
  version: ['2'],
})
export class GreetingController {
  @Get()
  defaultGreeting() {
    return 'Hi from v2';
  }

  @Delete('bye')
  byGreeting() {
    return 'Bye from v2';
  }
}
