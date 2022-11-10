import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerDto } from '../dtos/customer.dto';
import { PartialUpdateCustomerDto } from '../dtos/partial-update-customer.dto';
import { CustomerInterface } from '../interfaces/customer.interface';
import { customerList } from '../utils/customer-list';
import { v4 as uuidv4 } from 'uuid';
import { SaveCustomerDto } from '../dtos/save-customer.dto';

@Injectable()
export class CustomerService {
  private customers: CustomerInterface[] = customerList;

  getAll(): CustomerDto[] {
    return this.customers;
  }

  getCustomerById(uuid: string): CustomerDto {
    const customerFound = this.customers.find(
      (customer) => customer.uuid === uuid,
    );

    if (customerFound) return customerFound;

    throw new NotFoundException(`Customer with id ${uuid} does not exist.`);
  }

  saveCustomer(customer: SaveCustomerDto): CustomerDto {
    const newCustomer = { ...customer, uuid: uuidv4() };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  updateCustomer(uuid: string, customer: SaveCustomerDto): CustomerDto {
    const updateThisCustomer = this.customers.find(
      (customer) => customer.uuid === uuid,
    );

    if (updateThisCustomer) {
      const updatedCustomer: CustomerDto = { uuid, ...customer };

      this.customers = this.customers.map((customer) => {
        if (customer.uuid === updatedCustomer.uuid) return updatedCustomer;
        return customer;
      });

      return updatedCustomer;
    }

    throw new NotFoundException(`Customer with id ${uuid} does not exist.`);
  }

  updateCustomerPartially(
    uuid: string,
    customer: PartialUpdateCustomerDto,
  ): CustomerDto {
    const updateThisCustomer = this.customers.find(
      (customer) => customer.uuid === uuid,
    );

    if (updateThisCustomer) {
      const updatedCustomer: CustomerDto = {
        ...updateThisCustomer,
        ...customer,
        uuid,
      };

      this.customers = this.customers.map((customer) => {
        if (customer.uuid === updatedCustomer.uuid) return updatedCustomer;
        return customer;
      });

      return updatedCustomer;
    }

    throw new NotFoundException(`Customer with id ${uuid} does not exist.`);
  }

  deleteCustomer(uuid: string): boolean {
    const customerToDelete = this.customers.find(
      (customer) => customer.uuid === uuid,
    );

    if (customerToDelete) {
      this.customers = this.customers.filter(
        (customer) => customer.uuid !== uuid,
      );
      return true;
    }

    return false;
  }
}
