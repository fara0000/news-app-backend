import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import {AppDataSource} from "./data-source";
import { config } from 'dotenv';
import { UserModule } from './business/auth';
import {ConfigModule} from "@nestjs/config";
import {UserRepository} from "./database/repositories/user";
import {User} from "./database/entities/user";

config();


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true, // // shouldn't be used in production - may lose data
      logging: true,
      autoLoadEntities: true,
      subscribers: [],
      migrations: [],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
