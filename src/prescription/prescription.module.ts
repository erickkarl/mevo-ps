import { Module } from '@nestjs/common';
import { PrescriptionController } from './prescription.controller';
import { PrescriptionService } from './prescription.service';
import { BullModule } from '@nestjs/bullmq';

@Module({
  imports: [
    /* Decidi usar o BullMQ para fazer a fila de processamento em background pois 
    o Nest já possui suporte e encontrei vários exemplos de uso */
    BullModule.registerQueue({
      name: 'prescription',
    }),
  ],
  controllers: [PrescriptionController],
  providers: [PrescriptionService],
})
export class PrescriptionModule {}
