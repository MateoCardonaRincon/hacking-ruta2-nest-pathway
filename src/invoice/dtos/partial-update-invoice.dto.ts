import { Type } from 'class-transformer';
import { IsObject, IsOptional, IsUUID, ValidateNested } from 'class-validator';
import { PartialInvoiceInterface } from '../interfaces/partial-invoice.interface';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class PartialUpdateInvoiceDto implements PartialInvoiceInterface {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsObject()
  @IsOptional()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  detail?: InvoiceDetailDto;
}
