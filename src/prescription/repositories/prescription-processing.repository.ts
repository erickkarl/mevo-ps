import { PrismaService } from 'src/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { PrescriptionProcessing } from 'generated/prisma';

@Injectable()
export class PrescriptionProcessingRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createPrescriptionProcessing(): Promise<PrescriptionProcessing> {
    const prescriptionProcessing =
      await this.prisma.prescriptionProcessing.create({
        data: {
          status: 'processing',
          total_records: 0,
          processed_records: 0,
          valid_records: 0,
        },
      });
    return prescriptionProcessing;
  }
}
