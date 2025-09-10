import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrescriptionProcessingDTOIn } from './dto/prescription.dto';

@Processor('prescription')
export class PrescriptionProcessor extends WorkerHost {
  async process(job: Job<PrescriptionProcessingDTOIn>): Promise<void> {
    const file = job.data.file;
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log(file);
    return;
  }
}
