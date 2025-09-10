import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrescriptionProcessingDTOIn } from './dto/prescription.dto';

import { parse } from 'csv-parse';
import { createReadStream } from 'fs';

@Processor('prescription')
export class PrescriptionProcessor extends WorkerHost {
  async process(job: Job<PrescriptionProcessingDTOIn>): Promise<void> {
    /* Como o arquivo pode acabar sendo grande, farei a leitura via stream.
       Dessa maneira, a memória fica livre e podemos adicionar erros progressivamente */

    // escolhi o csv-parse para interpretar o arquivo pois é uma solução robusta e conhecida
    createReadStream(job.data.file.path)
      .pipe(
        parse({
          columns: true,
          skip_empty_lines: true,
        }),
      )
      .on('data', (record) => {
        console.log(record);
      });

    // simular salvar no banco de dados
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return;
  }
}
