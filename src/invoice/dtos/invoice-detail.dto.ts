import { IsOptional, IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { InvoiceDetailInterface } from '../interfaces/invoice-detail.interface';

export class InvoiceDetailDto implements InvoiceDetailInterface {
  @IsNotEmpty({
    message: 'The field `price` can`t be empty',
  })
  @IsNumber(
    {},
    {
      message: 'The field `price` must be of type number',
    },
  )
  readonly price: number;

  @IsNotEmpty({
    message: 'The field `product` can`t be empty',
  })
  @IsString({
    message: 'The field `product` must be of type string',
  })
  readonly product: string;

  @IsOptional()
  @IsString({
    message: 'The field `seller` must be of type string',
  })
  readonly seller?: string;
}
