import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { Status } from 'src/common/enums';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserInfo } from '../user-info/user-info.entity';
import { UserRole } from '../user-role/user-role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Unique username for the user' })
  @Column({ unique: true })
  username: string;

  @ApiProperty({ description: 'Unique email address for the user' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ description: 'Encrypted password for the user' })
  @Exclude({ toClassOnly: false })
  @Column()
  password: string;

  @ApiProperty({ enum: Status, description: 'Current status of the user' })
  @Column({
    type: 'enum',
    enum: Status,
    default: Status.PENDING,
  })
  status: Status;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
  deletedAt: Date;

  @OneToMany(() => UserRole, (userRole) => userRole.user, { cascade: true })
  userRole: UserRole;

  @OneToOne(() => UserInfo, (userInfo) => userInfo.user, { cascade: true })
  userInfo: UserInfo;
}
