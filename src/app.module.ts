import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrescriptionModule } from './prescription/prescription.module';

@Module({
  imports: [PrescriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
