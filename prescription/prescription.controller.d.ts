import { PrescriptionService } from './prescription.service';
export declare class PrescriptionController {
    private readonly prescriptionService;
    constructor(prescriptionService: PrescriptionService);
    processing(file: Express.Multer.File): Promise<any>;
}
