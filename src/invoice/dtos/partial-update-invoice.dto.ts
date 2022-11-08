import { IsObject, IsOptional, IsUUID } from 'class-validator';
import { PartialInvoiceInterface } from '../interfaces/partial-invoice.interface';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class PartialUpdateInvoiceDto implements PartialInvoiceInterface {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsObject()
  @IsOptional()
  detail?: InvoiceDetailDto;
}
