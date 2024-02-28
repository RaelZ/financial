import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { databaseConfig } from '../common/database/database-config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), UsersModule],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  constructor(protected appService: AppService) {}

  async onModuleInit() {}
}
