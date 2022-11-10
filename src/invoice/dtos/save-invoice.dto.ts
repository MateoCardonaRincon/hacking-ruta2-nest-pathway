import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SaveInvoiceInterface } from '../interfaces/save-invoice.interface';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class SaveInvoiceDto implements SaveInvoiceInterface {
  @IsString({
    message: 'The field `storeBranch` must be of type string',
  })
  @IsNotEmpty({
    message: 'The field `storeBranch` can`t be empty',
  })
  storeBranch: string;

  @IsObject({
    message:
      'The field `detail` must be an object of type ' +
      '{price: number; product: string; seller?: string;}',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  detail: InvoiceDetailDto;
}
