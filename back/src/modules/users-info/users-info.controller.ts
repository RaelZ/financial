import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from '../../entities/users/user.entity';
import { UsersInfoService } from './users-info.service';

@ApiTags('Users Info')
@Controller('users-info')
@UseGuards(new AuthGuard())
export class UsersInfoController {
  constructor(private readonly usersInfoService: UsersInfoService) {}

  @Get()
  async findAll(@Query('relations') relations?: string[]) {
    try {
      const res = await this.usersInfoService.find({}, relations);
      return { message: 'Success', data: res, statusCode: 200 };
    } catch ({ response }) {
      return response;
    }
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('relations') relations?: string[],
  ) {
    try {
      const [res] = await this.usersInfoService.find({ id }, relations);
      return { message: 'Success', data: res, statusCode: 200 };
    } catch ({ response }) {
      return response;
    }
  }

  @Post(':userId')
  async create(@Param('userId') userId: string, @Body() user: User) {
    try {
      const res = await this.usersInfoService.insert(userId, user);
      return { message: 'Success', data: res, statusCode: 201 };
    } catch ({ response }) {
      return response;
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() user: Partial<User>) {
    try {
      await this.usersInfoService.update(id, user);
      return { message: 'Updated', statusCode: 200 };
    } catch ({ response }) {
      return response;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.usersInfoService.delete(id);
      return { message: 'Deleted', statusCode: 200 };
    } catch ({ response }) {
      return response;
    }
  }
}
