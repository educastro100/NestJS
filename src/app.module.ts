import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { UserEntity } from './user/interfaces/user.interface';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: 'env.development.local',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT), // Certifique-se de que é um número inteiro
      username: process.env.DB_USERNAME,
      synchronize: true, // Sincroniza o banco de dados com as entidades
      // entities: [`${__dirname}/**/*.entity{.ts,.js}`], // Identifica todos os arquivos de entidade no projeto
      entities: [UserEntity],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor() {
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PORT:', process.env.DB_PORT);
    console.log('DB_USERNAME:', process.env.DB_USERNAME);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_DATABASE:', process.env.DB_DATABASE);
  }
}
