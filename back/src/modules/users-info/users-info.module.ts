import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from 'src/entities';
import { UsersModule } from '../users/users.module';
import { UsersInfoController } from './users-info.controller';
import { UsersInfoService } from './users-info.service';

@Module({
  controllers: [UsersInfoController],
  providers: [UsersInfoService],
  exports: [UsersInfoService],
  imports: [TypeOrmModule.forFeature([UserInfo]), UsersModule],
})
export class UsersInfoModule {}
