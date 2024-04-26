import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from '../../entities/users/user.entity';
import { IUser } from './interfaces/user.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseGuards(new AuthGuard())
  async findAll(@Query('relations') relations?: string[]) {
    const res = await this.usersService.find({}, relations);
    return { message: 'Success', data: res, statusCode: 200 };
  }

  @Get(':id')
  @UseGuards(new AuthGuard())
  async findOne(
    @Param('id') id: string,
    @Query('relations') relations?: string[],
  ) {
    const [res] = await this.usersService.find({ id }, relations);
    return { message: 'Success', data: res, statusCode: 200 };
  }

  @Post()
  async create(@Body() user: IUser) {
    const res = await this.usersService.insert(user);
    return { message: 'Success', data: res, statusCode: 201 };
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  async upsert(@Body() user: User, @Param('id') id?: string) {
    const res = await this.usersService.upsert(user, id);
    return { message: 'Success', data: res, statusCode: 200 };
  }

  @Patch(':id')
  @UseGuards(new AuthGuard())
  async update(@Param('id') id: string, @Body() user: Partial<User>) {
    await this.usersService.update(id, user);
    return { message: 'Updated', statusCode: 200 };
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  async remove(@Param('id') id: string) {
    await this.usersService.delete(id);
    return { message: 'Deleted', statusCode: 200 };
  }
}
