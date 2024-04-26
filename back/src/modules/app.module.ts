import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from '../common/database/database-config';
import { AuthModule } from './auth/auth.module';
import { UsersInfoModule } from './users-info/users-info.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    AuthModule,
    UsersInfoModule,
  ],
})
export class AppModule implements OnModuleInit {
  constructor() {}

  async onModuleInit() {}
}
