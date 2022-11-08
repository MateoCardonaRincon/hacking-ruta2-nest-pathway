import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerDto } from '../dtos/customer.dto';
import { PartialUpdateContactDto } from '../dtos/partial-update-contact.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  getAll(): CustomerDto[] {
    return this.customerService.getAll();
  }

  @Get(':uuid')
  getCustomerById(
    @Param('uuid') uuid: string,
  ): CustomerDto | NotFoundException {
    return this.customerService.getCustomerById(uuid);
  }

  @Post()
  saveCustomer(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    customer: CustomerDto,
  ): CustomerDto {
    return this.customerService.saveCustomer(customer);
  }

  @Put(':uuid')
  updateCustomer(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    customer: UpdateCustomerDto,
  ): UpdateCustomerDto | NotFoundException {
    return this.customerService.updateCustomer(uuid, customer);
  }

  @Patch(':uuid')
  updateCustomerPartially(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    customer: PartialUpdateContactDto,
  ): PartialUpdateContactDto | NotFoundException {
    return this.customerService.updateCustomerPartially(uuid, customer);
  }

  @Delete(':uuid')
  deleteCustomer(@Param('uuid') uuid: string): boolean {
    return this.customerService.deleteCustomer(uuid);
  }
}
