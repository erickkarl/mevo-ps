export enum PrescriptionProcessingStatus {
  processing = 'processing',
  completed = 'completed',
  failed = 'failed',
}

export class PrescriptionErrorEntity {
  id?: string;
  line: number;
  field: string;
  message: string;
  value: string;
}

export class PrescriptionEntity {
  id?: string;
  date: Date;
  patient_cpf: string;
  doctor_crm: string;
  doctor_uf: string;
  medication: string;
  controlled: boolean;
  dosage: string;
  days: number;
  duration: number;
  notes: string;
}

export class PrescriptionProcessingEntity {
  id?: string;
  status: PrescriptionProcessingStatus;
  total_records: number;
  processed_records: number;
  valid_records: number;
  errors: PrescriptionErrorEntity[];
  prescriptions: PrescriptionEntity[];
}
