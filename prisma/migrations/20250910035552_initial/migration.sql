-- CreateEnum
CREATE TYPE "public"."PrescriptionProcessingStatus" AS ENUM ('processing', 'completed', 'failed');

-- CreateTable
CREATE TABLE "public"."Prescription" (
    "id" TEXT NOT NULL,
    "prescription_processing_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "patient_cpf" VARCHAR(11) NOT NULL,
    "doctor_crm" TEXT NOT NULL,
    "doctor_uf" VARCHAR(2) NOT NULL,
    "medication" TEXT NOT NULL,
    "controlled" BOOLEAN NOT NULL,
    "dosage" TEXT NOT NULL,
    "days" SMALLINT NOT NULL,
    "duration" SMALLINT NOT NULL,
    "notes" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Prescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PrescriptionError" (
    "id" TEXT NOT NULL,
    "prescription_processing_id" TEXT NOT NULL,
    "line" INTEGER NOT NULL,
    "field" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PrescriptionError_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."PrescriptionProcessing" (
    "id" TEXT NOT NULL,
    "status" "public"."PrescriptionProcessingStatus" NOT NULL DEFAULT 'processing',
    "total_records" INTEGER NOT NULL,
    "processed_records" INTEGER NOT NULL,
    "valid_records" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PrescriptionProcessing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Prescription" ADD CONSTRAINT "Prescription_prescription_processing_id_fkey" FOREIGN KEY ("prescription_processing_id") REFERENCES "public"."PrescriptionProcessing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."PrescriptionError" ADD CONSTRAINT "PrescriptionError_prescription_processing_id_fkey" FOREIGN KEY ("prescription_processing_id") REFERENCES "public"."PrescriptionProcessing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
