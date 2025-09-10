import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';

import { PrescriptionController } from './prescription.controller';
import { PrescriptionService } from './prescription.service';
import { PrescriptionProcessor } from './prescription.processor';

@Module({
  imports: [
    /* Decidi usar o BullMQ para fazer a fila de processamento em background pois 
    o Nest já possui suporte e encontrei vários exemplos de uso */
    BullModule.registerQueue({
      name: 'prescription',
    }),
  ],
  controllers: [PrescriptionController],
  providers: [PrescriptionService, PrescriptionProcessor],
})
export class PrescriptionModule {}
