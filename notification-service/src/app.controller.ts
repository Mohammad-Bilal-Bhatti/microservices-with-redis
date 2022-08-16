import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('send_email')
  handleSendEmail(@Payload() data: any) {
    console.log(`[INCOMMING EVENT]: 'send_email'`);
    this.appService.sendEmail(data);
  }

  @EventPattern('send_notification')
  handSendNotification(@Payload() data: any) {
    console.log(`[INCOMMING EVENT]: 'send_notification'`);
    this.appService.sendNotification(data);
  }

}
