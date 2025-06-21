import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CONFIG_DATABASE } from './common/infraestructure/config-database';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CONFIG_DATABASE(),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
