import { SendEmailDto } from './dto/send-email.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendNotificationDto } from './dto/send-notification.dto';

@Injectable()
export class AppService {

  constructor(
    @Inject('USER_SERVICE') private readonly userService: ClientProxy,
    @Inject('NOTIFICATION_SERVICE') private readonly notificationService: ClientProxy,
  ) {}

  findUsers(query: any) {
    return this.userService.send('find_users', query);
  }

  findUserById(id: number) {
    return this.userService.send('find_user', id);
  }

  createUser(input: CreateUserDto) {
    return this.userService.send('create_user', input);
  }

  updateUser(userId: number, input: UpdateUserDto) {
    return this.userService.send('update_user', { id: userId, ...input })
  }

  deleteUser(userId: number) {
    return this.userService.send('delete_user', { id: userId });
  }

  sendNotification(input: SendNotificationDto) {
    this.notificationService.emit('send_email', input);
  }

  sendEmail(input: SendEmailDto) {
    this.notificationService.emit('send_notification', input);
  }

}
