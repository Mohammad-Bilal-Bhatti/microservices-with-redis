import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sendEmail(data: any) {
    const { to, message } = data;
    console.log(`sending EMAIL to: '${to}' with message: '${message}'`);
  }

  sendNotification(data: any) {
    const { to, message } = data;
    console.log(`sending NOTIFICATION to: '${to}' with message: '${message}'`);
  }
}
