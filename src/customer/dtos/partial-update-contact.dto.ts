import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { PartialCustomerInterface } from '../interfaces/partial-customer.interface';

export class PartialUpdateContactDto implements PartialCustomerInterface {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsString()
  @IsOptional()
  phoneNumber: string;

  @IsEmail()
  @IsOptional()
  email: string;
}
