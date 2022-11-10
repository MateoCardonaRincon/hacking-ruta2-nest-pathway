import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { SaveCustomerInterface } from '../interfaces/save-customer.interface';

export class SaveCustomerDto implements SaveCustomerInterface {
  @IsString({
    message: 'The field `name` must be of type string',
  })
  @IsNotEmpty({
    message: 'The field `name` can`t be empty',
  })
  readonly name: string;

  @IsString({
    message: 'The field `lastname` must be of type string',
  })
  @IsOptional()
  readonly lastname?: string;

  @IsString({
    message: 'The field `phoneNumber` must be of type string',
  })
  @IsNotEmpty({
    message: 'The field `phoneNumber` can`t be empty',
  })
  readonly phoneNumber: string;

  @IsEmail({
    message: 'The field `email` must follow an email format',
  })
  @IsNotEmpty({
    message: 'The field `email` can`t be empty',
  })
  readonly email: string;
}
