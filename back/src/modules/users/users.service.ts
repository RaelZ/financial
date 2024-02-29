import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/users/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async find(where?: Partial<User>, relations: string[] = []): Promise<User[]> {
    return await this.usersRepository.find({ where, relations });
  }

  async insert(data: Partial<User>): Promise<User> {
    return await this.usersRepository.save(data);
  }

  async update(id: string, data: Partial<User>): Promise<void> {
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
