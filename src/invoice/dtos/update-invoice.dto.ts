import { PartialType } from '@nestjs/mapped-types';
import { InvoiceDto } from './invoice.dto';

export class UpdateInvoiceDto extends PartialType(InvoiceDto) {}
