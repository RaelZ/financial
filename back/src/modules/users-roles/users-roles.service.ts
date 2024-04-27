import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRole } from '../../entities/user-role.entity';

@Injectable()
export class UsersRolesService {
  constructor(
    @InjectRepository(UserRole)
    private rolesRepository: Repository<UserRole>,
  ) {}

  async find(
    where?: Partial<UserRole>,
    relations: string[] = [],
  ): Promise<UserRole[]> {
    return await this.rolesRepository.find({ where, relations });
  }

  async insert(data: Partial<UserRole>): Promise<UserRole> {
    return await this.rolesRepository.save(data);
  }

  async delete(id: string): Promise<void> {
    const role = await this.rolesRepository.findOne({ where: { id } });

    if (!role) throw new NotFoundException('UserRoles not found');

    await this.rolesRepository.delete(role.id);
  }
}
