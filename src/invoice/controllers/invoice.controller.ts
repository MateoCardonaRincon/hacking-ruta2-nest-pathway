import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { InvoiceDto } from '../dtos/invoice.dto';
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
  getInvoiceById(@Param('uuid') uuid: string): InvoiceDto {
    return this.invoiceService.getInvoiceById(uuid);
  }

  @Post()
  saveInvoice(@Body() invoice: InvoiceDto): InvoiceDto {
    return this.invoiceService.saveInvoice(invoice);
  }

  @Put(':uuid')
  updateInvoice(
    @Param('uuid') uuid: string,
    @Body() invoice: UpdateInvoiceDto,
  ): UpdateInvoiceDto {
    return this.invoiceService.updateInvoice(uuid, invoice);
  }

  @Patch(':uuid')
  updateInvoicePartially(
    @Param('uuid') uuid: string,
    @Body() invoice: UpdateInvoiceDto,
  ): UpdateInvoiceDto {
    return this.invoiceService.updateInvoicePartially(uuid, invoice);
  }

  @Delete(':uuid')
  deleteInvoice(@Param('uuid') uuid: string): boolean {
    return this.invoiceService.deleteInvoice(uuid);
  }
}
