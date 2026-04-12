import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@utils/prisma/prisma.module';

@Module({
  imports: [
    //CORE MODULES
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', `.env.${process.env.NODE_ENV}`],
    }),
    ScheduleModule.forRoot({}),
    PrismaModule,

    //APP MODULES
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
