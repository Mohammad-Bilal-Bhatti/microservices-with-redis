import { SendEmailDto } from './dto/send-email.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SendNotificationDto } from './dto/send-notification.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('/users/:id')
  findUserById(@Param('id', ParseIntPipe) id: number) {
    return this.appService.findUserById(id);
  }
  
  @Patch('/users/:id')
  updateUser(@Param('id', ParseIntPipe) id: number, @Body() input: UpdateUserDto) {
    return this.appService.updateUser(id, input);
  }

  @Delete('/users/:id')
  removeUser(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteUser(id);
  }

  @Get('/users')
  findUsers(@Query() query: any) {
    return this.appService.findUsers(query);
  }

  @Post('/users')
  createUser(@Body() input: CreateUserDto) {
    return this.appService.createUser(input);
  }

  @Post('email')
  sendEmail(@Body() input: SendEmailDto) {
    this.appService.sendEmail(input);
    return { message: 'success' };
  }

  @Post('notify')
  sendNotification(@Body() input: SendNotificationDto) {
    this.appService.sendNotification(input);
    return { message: 'success' };
  }

}
