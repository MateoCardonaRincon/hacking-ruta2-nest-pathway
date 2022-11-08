import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CustomerInterface } from '../interfaces/customer.interface';
import { v4 as uuidv4 } from 'uuid';

export class CustomerDto implements CustomerInterface {
  @IsUUID()
  @IsOptional()
  uuid?: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  lastname?: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  constructor(customer?: CustomerInterface) {
    this.uuid = customer?.uuid ?? uuidv4();
    this.name = customer?.name ?? '';
    if (customer?.lastname) this.lastname = customer?.lastname;
    this.phoneNumber = customer?.phoneNumber ?? '';
    this.email = customer?.email ?? '';
  }
}
