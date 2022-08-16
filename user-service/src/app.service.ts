import { SearchUsersQueryDto } from './dto/search-users-query.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class AppService {
  private users: User[];
  private nextId: number;

  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  createUser(input: CreateUserDto) {
    const user = { id: this.nextId++, ...input };
    this.users.push(user);
    return user;
  }

  updateUser(input: UpdateUserDto) {
    const index = this.users.findIndex(u => u.id == input.id);
    if (index < 0) return null;
    this.users.splice(index, 1, input);
    return input;
  }

  deleteUser(input: DeleteUserDto) {
    const index = this.users.findIndex((u) => u.id == input.id);
    if (index < 0) return null;
    const user = this.users[index];
    this.users.splice(index, 1);
    return user;
  }

  findUserById(id: number): User {
    const user = this.users.find((u) => u.id == id);
    return user;
  }

  findUsers(query: SearchUsersQueryDto): User[] {
    return this.users;
  }
}
