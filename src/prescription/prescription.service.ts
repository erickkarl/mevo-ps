import { Injectable } from '@nestjs/common';
import { PrescriptionProcessingDTOIn } from './dto/prescription.dto';

@Injectable()
export class PrescriptionService {
  async prescritionProcessing(
    input: PrescriptionProcessingDTOIn,
  ): Promise<any> {
    console.log(input.file);
    return Promise.resolve('Ok');
  }
}
