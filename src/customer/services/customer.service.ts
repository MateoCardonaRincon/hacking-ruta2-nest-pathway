import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerDto } from '../dtos/customer.dto';
import { PartialUpdateContactDto } from '../dtos/partial-update-contact.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { customerList } from '../utils/customer-list';

@Injectable()
export class CustomerService {
  getAll(): CustomerDto[] {
    return customerList;
  }

  getCustomerById(uuid: string): CustomerDto | NotFoundException {
    const customerFound = customerList.find(
      (customer) => customer.uuid === uuid,
    );

    return (
      customerFound ??
      new NotFoundException(`Customer with id ${uuid} does not exist.`)
    );
  }

  saveCustomer(customer: CustomerDto): CustomerDto {
    return customer;
  }

  updateCustomer(
    uuid: string,
    customer: UpdateCustomerDto,
  ): UpdateCustomerDto | NotFoundException {
    const updateThisCustomer = customerList.find(
      (customer) => customer.uuid === uuid,
    );

    if (updateThisCustomer) {
      return {
        uuid,
        name: customer.name,
        lastname: customer.lastname,
        phoneNumber: customer.phoneNumber,
        email: customer.email,
      };
    }

    return new NotFoundException(`Customer with id ${uuid} does not exist.`);
  }

  updateCustomerPartially(
    uuid: string,
    customer: PartialUpdateContactDto,
  ): PartialUpdateContactDto | NotFoundException {
    const updateThisCustomer = customerList.find(
      (customer) => customer.uuid === uuid,
    );

    if (updateThisCustomer) {
      return {
        uuid,
        name: customer.name ?? updateThisCustomer.name,
        lastname: customer.lastname ?? updateThisCustomer.lastname,
        phoneNumber: customer.phoneNumber ?? updateThisCustomer.phoneNumber,
        email: customer.email ?? updateThisCustomer.email,
      };
    }

    return new NotFoundException(`Customer with id ${uuid} does not exist.`);
  }

  deleteCustomer(uuid: string): boolean {
    const customerToDelete = customerList.find(
      (customer) => customer.uuid === uuid,
    );

    if (customerToDelete) return true;

    return false;
  }
}
