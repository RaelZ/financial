import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { encryptPassword } from 'src/utils/funcs';
import { Repository } from 'typeorm';
import { User } from '../../entities/users/user.entity';
import { RolesService } from '../roles/roles.service';
import { UsersRolesService } from '../users-roles/users-roles.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private rolesService: RolesService,
    private usersRolesService: UsersRolesService,
  ) {}

  async find(
    where?: Partial<User>,
    relations: string[] = ['userRole.role', 'userInfo'],
  ): Promise<User[]> {
    try {
      return await this.usersRepository.find({ where, relations });
    } catch (error) {
      throw new InternalServerErrorException('Error retrieving users');
    }
  }

  async insert(data: Partial<User>): Promise<User> {
    try {
      const [role] = await this.rolesService.find({ name: 'DEFAULT' });
      if (!role) throw new NotFoundException('Default role not found');

      const password = encryptPassword(data.password);
      const user = await this.usersRepository.save({ ...data, password });
      this.usersRolesService.insert({
        userId: user.id,
        roleId: role.id,
      });

      return user;
    } catch ({ response }) {
      throw new InternalServerErrorException(response?.message);
    }
  }

  async upsert(data: User, id?: string): Promise<void> {
    const [user] = await this.find({ id });
    if (!user) {
      await this.insert(data);
    } else {
      await this.usersRepository.update(user.id, data);
    }
  }

  async update(id: string, data: Partial<User>): Promise<void> {
    const [user] = await this.find({ id });
    if (!user) throw new NotFoundException('User not found');

    await this.usersRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const [user] = await this.find({ id });
    if (!user) throw new NotFoundException('User not found');

    await this.usersRepository.softDelete(id);
  }
}
