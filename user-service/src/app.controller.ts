import { SearchUsersQueryDto } from './dto/search-users-query.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create_user')
  handleCreateUser(@Payload() input: CreateUserDto) {
    return this.appService.createUser(input);
  }

  @MessagePattern('update_user')
  handleUpdateUser(@Payload() input: UpdateUserDto) {
    return this.appService.updateUser(input);
  }

  @MessagePattern('delete_user')
  handleDeleteUser(@Payload() input: DeleteUserDto) {
    return this.appService.deleteUser(input);
  }

  @MessagePattern('find_users')
  handleFindUsers(@Payload() query: SearchUsersQueryDto) {
    return this.appService.findUsers(query);
  }

  @MessagePattern('find_user')
  handleFindUser(@Payload() id: number) {
    return this.appService.findUserById(id);
  }

}
