import { Type } from 'class-transformer';
import {
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { PartialInvoiceInterface } from '../interfaces/partial-invoice.interface';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class PartialUpdateInvoiceDto implements PartialInvoiceInterface {
  @IsString({
    message: 'The field `storeBranch` must be of type string',
  })
  @IsOptional()
  readonly storeBranch?: string;

  @IsObject({
    message:
      'The field `detail` must be an object of type\n' +
      '{price: number;\nproduct: string;\nseller?: string;}',
  })
  @IsOptional()
  @ValidateNested()
  @Type(() => InvoiceDetailDto)
  readonly detail?: InvoiceDetailDto;
}
