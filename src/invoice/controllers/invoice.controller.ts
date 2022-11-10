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
import { InvoiceDto } from '../dtos/invoice.dto';
import { PartialUpdateInvoiceDto } from '../dtos/partial-update-invoice.dto';
import { SaveInvoiceDto } from '../dtos/save-invoice.dto';
import { ResponseDateTimeInterceptor } from '../interceptors/response-date-time.interceptor';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  getAll(): InvoiceDto[] {
    return this.invoiceService.getAll();
  }

  @Get(':uuid')
  @UseInterceptors(ResponseDateTimeInterceptor)
  getInvoiceById(@Param('uuid') uuid: string): InvoiceDto {
    return this.invoiceService.getInvoiceById(uuid);
  }

  @Post()
  @UseInterceptors(ResponseDateTimeInterceptor)
  saveInvoice(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    invoice: SaveInvoiceDto,
  ): InvoiceDto {
    return this.invoiceService.saveInvoice(invoice);
  }

  @Put(':uuid')
  @UseInterceptors(ResponseDateTimeInterceptor)
  updateInvoice(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    invoice: SaveInvoiceDto,
  ): InvoiceDto {
    return this.invoiceService.updateInvoice(uuid, invoice);
  }

  @Patch(':uuid')
  @UseInterceptors(ResponseDateTimeInterceptor)
  updateInvoicePartially(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
        errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE,
      }),
    )
    invoice: PartialUpdateInvoiceDto,
  ): InvoiceDto {
    return this.invoiceService.updateInvoicePartially(uuid, invoice);
  }

  @Delete(':uuid')
  @UseInterceptors(ResponseDateTimeInterceptor)
  deleteInvoice(@Param('uuid') uuid: string): boolean {
    return this.invoiceService.deleteInvoice(uuid);
  }
}
