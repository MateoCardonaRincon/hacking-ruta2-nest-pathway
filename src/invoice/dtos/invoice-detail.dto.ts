import { IsOptional, IsString, IsNumber } from 'class-validator';

export class InvoiceDetailDto {
  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsString()
  product?: string;

  @IsOptional()
  @IsString()
  seller?: string;
}
