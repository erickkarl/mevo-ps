/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async processing(@UploadedFile() file: Express.Multer.File) {
    const result = await this.prescriptionService.prescritionProcessing({
      file,
    });
    return result;
  }
}
