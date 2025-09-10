import { Injectable } from '@nestjs/common';
import {
  PrescriptionProcessingDTOIn,
  PrescritionProcessingDTOOut,
} from './dto/prescription.dto';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectQueue('prescription') private readonly prescriptionQueue: Queue,
  ) {}

  async prescritionProcessing(
    input: PrescriptionProcessingDTOIn,
  ): Promise<PrescritionProcessingDTOOut> {
    await this.prescriptionQueue.add('prescription', {
      file: input.file,
    });

    console.log('Prescription processing started');

    return Promise.resolve({});
  }
}
