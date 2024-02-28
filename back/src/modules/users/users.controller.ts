import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UsersEntity } from './entity/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() user: Partial<UsersEntity>) {
    try {
      const res = await this.usersService.insert(user);
      return { message: 'Success', data: res, statusCode: 201 };
    } catch (e) {
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: Partial<UsersEntity>) {
    try {
      const res = await this.usersService.update(id, user);
      return { message: 'Success', data: res, statusCode: 200 };
    } catch (e) {
      throw e;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const res = await this.usersService.delete(id);
      return { message: 'Success', data: res, statusCode: 200 };
    } catch (e) {
      throw e;
    }
  }
}
