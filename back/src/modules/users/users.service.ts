import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}

  async insert(data: Partial<UsersEntity>): Promise<UsersEntity> {
    return await this.usersRepository.save(data);
  }

  async update(id: string, data: Partial<UsersEntity>): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) throw new NotFoundException('Users not found');

    await this.usersRepository.update(user.id, data);
  }

  async delete(id: string): Promise<void> {
    const user = await this.usersRepository.findOne({ where: { id } });

    if (!user) throw new NotFoundException('Users not found');

    await this.usersRepository.softDelete(user.id);
  }
}
