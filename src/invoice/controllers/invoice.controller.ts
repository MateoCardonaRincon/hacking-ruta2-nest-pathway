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
import { InvoiceDto } from '../dtos/invoice.dto';
import { PartialUpdateInvoiceDto } from '../dtos/partial-update-invoice.dto';
import { UpdateInvoiceDto } from '../dtos/update-invoice.dto';
import { InvoiceService } from '../services/invoice.service';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get()
  getAll(): InvoiceDto[] {
    return this.invoiceService.getAll();
  }

  @Get(':uuid')
  getInvoiceById(@Param('uuid') uuid: string): InvoiceDto | NotFoundException {
    return this.invoiceService.getInvoiceById(uuid);
  }

  @Post()
  saveInvoice(
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    invoice: InvoiceDto,
  ): InvoiceDto {
    return this.invoiceService.saveInvoice(invoice);
  }

  @Put(':uuid')
  updateInvoice(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    invoice: UpdateInvoiceDto,
  ): UpdateInvoiceDto | NotFoundException {
    return this.invoiceService.updateInvoice(uuid, invoice);
  }

  @Patch(':uuid')
  updateInvoicePartially(
    @Param('uuid') uuid: string,
    @Body(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    invoice: PartialUpdateInvoiceDto,
  ): PartialUpdateInvoiceDto | NotFoundException {
    return this.invoiceService.updateInvoicePartially(uuid, invoice);
  }

  @Delete(':uuid')
  deleteInvoice(@Param('uuid') uuid: string): boolean {
    return this.invoiceService.deleteInvoice(uuid);
  }
}
