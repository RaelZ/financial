import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { User } from '../../entities/users/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(@Query() relations: string[] = []) {
    try {
      const res = await this.usersService.find({}, relations);
      return { message: 'Success', data: res, statusCode: 200 };
    } catch (e) {
      throw e;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query() relations: string[] = []) {
    try {
      const res = await this.usersService.find({ id }, relations);
      return { message: 'Success', data: res, statusCode: 200 };
    } catch (e) {
      throw e;
    }
  }

  @Post()
  async create(@Body() user: Partial<User>) {
    try {
      const res = await this.usersService.insert(user);
      return { message: 'Success', data: res, statusCode: 201 };
    } catch (e) {
      throw e;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: Partial<User>) {
    try {
      await this.usersService.update(id, user);
      return { message: 'Updated', statusCode: 200 };
    } catch (e) {
      throw e;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersService.delete(id);
      return { message: 'Deleted', statusCode: 200 };
    } catch (e) {
      throw e;
    }
  }
}
