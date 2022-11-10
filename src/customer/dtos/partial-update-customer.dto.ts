import { IsEmail, IsOptional, IsString } from 'class-validator';
import { PartialCustomerInterface } from '../interfaces/partial-customer.interface';

export class PartialUpdateCustomerDto implements PartialCustomerInterface {
  @IsString({
    message: 'The field `name` must be of type string',
  })
  @IsOptional()
  readonly name: string;

  @IsString({
    message: 'The field `lastname` must be of type string',
  })
  @IsOptional()
  readonly lastname?: string;

  @IsString({
    message: 'The field `phoneNumber` must be of type string',
  })
  @IsOptional()
  readonly phoneNumber: string;

  @IsEmail({
    message: 'The field `email` must follow an email format',
  })
  @IsOptional()
  readonly email: string;
}
