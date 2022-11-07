import { Injectable } from '@nestjs/common';
import { CustomerDto } from '../dtos/customer.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';

@Injectable()
export class CustomerService {
  getAll(): CustomerDto[] {
    throw new Error('Method not implemented.');
  }

  getCustomerById(uuid: string): CustomerDto {
    throw new Error('Method not implemented.');
  }

  saveCustomer(customer: CustomerDto): CustomerDto {
    throw new Error('Method not implemented.');
  }

  updateCustomer(uuid: string, customer: UpdateCustomerDto): UpdateCustomerDto {
    throw new Error('Method not implemented.');
  }

  updateCustomerPartially(
    uuid: string,
    customer: UpdateCustomerDto,
  ): UpdateCustomerDto {
    throw new Error('Method not implemented.');
  }

  deleteCustomer(uuid: string): boolean {
    throw new Error('Method not implemented.');
  }
}
