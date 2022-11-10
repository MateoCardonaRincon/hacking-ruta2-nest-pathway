import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CustomerDto } from '../dtos/customer.dto';
import { PartialUpdateCustomerDto } from '../dtos/partial-update-customer.dto';
import { SaveCustomerDto } from '../dtos/save-customer.dto';
import { TransformLastnameOutputInterceptor } from '../interceptors/transform-lastname-output.interceptor';
import { CustomerService } from '../services/customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  @UseInterceptors(TransformLastnameOutputInterceptor)
  getAll(): CustomerDto[] {
    return this.customerService.getAll();
  }

  @Get(':uuid')
  @UseInterceptors(TransformLastnameOutputInterceptor)
  getCustomerById(@Param('uuid') uuid: string): CustomerDto {
    return this.customerService.getCustomerById(uuid);
  }

  @Post()
  @UseInterceptors(TransformLastnameOutputInterceptor)
  saveCustomer(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    customer: SaveCustomerDto,
  ): CustomerDto {
    return this.customerService.saveCustomer(customer);
  }

  @Put(':uuid')
  @UseInterceptors(TransformLastnameOutputInterceptor)
  updateCustomer(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    customer: SaveCustomerDto,
  ): CustomerDto {
    return this.customerService.updateCustomer(uuid, customer);
  }

  @Patch(':uuid')
  @UseInterceptors(TransformLastnameOutputInterceptor)
  updateCustomerPartially(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    customer: PartialUpdateCustomerDto,
  ): CustomerDto {
    return this.customerService.updateCustomerPartially(uuid, customer);
  }

  @Delete(':uuid')
  deleteCustomer(@Param('uuid') uuid: string): boolean {
    return this.customerService.deleteCustomer(uuid);
  }
}
