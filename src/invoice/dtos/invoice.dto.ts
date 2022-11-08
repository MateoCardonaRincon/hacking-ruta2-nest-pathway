import {
  IsNotEmpty,
  IsOptional,
  IsObject,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { InvoiceInterface } from '../interfaces/invoice.interface';
import { v4 as uuidv4 } from 'uuid';
import { InvoiceDetailDto } from './invoice-detail.dto';
import { Type } from 'class-transformer';

export class InvoiceDto implements InvoiceInterface {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsObject()
  @IsNotEmpty()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  detail: InvoiceDetailDto;

  constructor(invoice?: InvoiceInterface) {
    this.uuid = invoice?.uuid ?? uuidv4();
    this.detail = invoice?.detail ?? {};
  }
}
