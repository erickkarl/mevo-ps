import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('prescription')
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @Post('/upload')
  @UseInterceptors(
    // Escolhi armazenar o arquivo para simular melhor como seria um upload real (ex: S3, etc)
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
      }),
    }),
  )
  async processing(@UploadedFile() file: Express.Multer.File) {
    const result = await this.prescriptionService.prescritionProcessing({
      file,
    });
    return result;
  }
}
