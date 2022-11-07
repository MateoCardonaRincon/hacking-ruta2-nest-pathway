import { Injectable } from '@nestjs/common';
import { InvoiceDto } from '../dtos/invoice.dto';
import { UpdateInvoiceDto } from '../dtos/update-invoice.dto';

@Injectable()
export class InvoiceService {
  getAll(): InvoiceDto[] {
    throw new Error('Method not implemented.');
  }

  getInvoiceById(uuid: string): InvoiceDto {
    throw new Error('Method not implemented.');
  }

  saveInvoice(invoice: InvoiceDto): InvoiceDto {
    throw new Error('Method not implemented.');
  }

  updateInvoice(uuid: string, invoice: UpdateInvoiceDto): UpdateInvoiceDto {
    throw new Error('Method not implemented.');
  }

  updateInvoicePartially(
    uuid: string,
    invoice: UpdateInvoiceDto,
  ): UpdateInvoiceDto {
    throw new Error('Method not implemented.');
  }

  deleteInvoice(uuid: string): boolean {
    throw new Error('Method not implemented.');
  }
}
