import { Injectable } from '@nestjs/common';
import {
  PrescriptionProcessingDTOIn,
  PrescritionProcessingDTOOut,
} from './dto/prescription.dto';

@Injectable()
export class PrescriptionService {
  async prescritionProcessing(
    input: PrescriptionProcessingDTOIn,
  ): Promise<PrescritionProcessingDTOOut> {
    console.log(input.file);
    return Promise.resolve({});
  }
}
