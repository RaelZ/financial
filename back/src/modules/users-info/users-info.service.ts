import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInfo } from 'src/entities';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';

@Injectable()
export class UsersInfoService {
  constructor(
    @InjectRepository(UserInfo)
    private readonly usersInfoRepository: Repository<UserInfo>,
    private readonly usersService: UsersService,
  ) {}

  async find(
    where?: Partial<UserInfo>,
    relations: string[] = [],
  ): Promise<UserInfo[]> {
    try {
      return await this.usersInfoRepository.find({ where, relations });
    } catch (error) {
      throw new InternalServerErrorException(
        'Error retrieving user info details.',
      );
    }
  }

  async insert(userId: string, data: Partial<UserInfo>): Promise<UserInfo> {
    try {
      const [user] = await this.usersService.find({ id: userId });

      if (!user) throw new NotFoundException('User not found.');

      const userInfo = await this.usersInfoRepository.save({
        ...data,
        user_id: userId,
      });
      return userInfo;
    } catch (error) {
      throw new InternalServerErrorException('Error creating user info.');
    }
  }

  async update(id: string, data: Partial<UserInfo>): Promise<void> {
    try {
      const [userInfo] = await this.find({ id });

      if (!userInfo) throw new NotFoundException('UserInfo not found.');

      await this.usersInfoRepository.update(id, data);
    } catch (error) {
      throw new InternalServerErrorException('Error updating user info.');
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const [userInfo] = await this.find({ id });

      if (!userInfo) throw new NotFoundException('User info not found.');

      await this.usersInfoRepository.softDelete(id);
    } catch (error) {
      throw new InternalServerErrorException('Error deleting user info.');
    }
  }
}
