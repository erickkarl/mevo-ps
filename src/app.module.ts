import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrescriptionModule } from './prescription/prescription.module';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    PrescriptionModule,
    BullModule.forRoot({
      connection: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT ?? '6379'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
