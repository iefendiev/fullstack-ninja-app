import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { AuthModule } from './auth/auth.module';
import { DojosModule } from './dojos/dojos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // db connection config
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      // nest.js is working off out of transpiled code
      entities: ['dist/**/*.entity.js'],
      // db schema is auto created on every app launch
      // synchronize:true is not used for prod
      synchronize: true,
      retryAttempts: 1, // TODO delete this line
    }),
    // rest of the modules
    NinjasModule,
    AuthModule,
    DojosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
