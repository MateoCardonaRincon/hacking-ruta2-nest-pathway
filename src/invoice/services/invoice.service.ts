import { Injectable, NotFoundException } from '@nestjs/common';
import { InvoiceDto } from '../dtos/invoice.dto';
import { PartialUpdateInvoiceDto } from '../dtos/partial-update-invoice.dto';
import { SaveInvoiceDto } from '../dtos/save-invoice.dto';
import { InvoiceInterface } from '../interfaces/invoice.interface';
import { invoiceList } from '../utils/invoice-list';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class InvoiceService {
  private invoices: InvoiceInterface[] = invoiceList;

  getAll(): InvoiceDto[] {
    return this.invoices;
  }

  getInvoiceById(uuid: string): InvoiceDto {
    const invoiceFound = this.invoices.find((invoice) => invoice.uuid === uuid);

    if (invoiceFound) return invoiceFound;

    throw new NotFoundException(`Invoice with id ${uuid} does not exist.`);
  }

  saveInvoice(invoice: SaveInvoiceDto): InvoiceDto {
    const newInvoice = { ...invoice, uuid: uuidv4() };
    this.invoices.push(newInvoice);
    return newInvoice;
  }

  updateInvoice(uuid: string, invoice: SaveInvoiceDto): InvoiceDto {
    const updateThisInvoice = this.invoices.find(
      (invoice) => invoice.uuid === uuid,
    );

    if (updateThisInvoice) {
      const updatedInvoice: InvoiceDto = {
        uuid,
        ...invoice,
        detail: { ...invoice.detail },
      };

      this.invoices = this.invoices.map((invoice) => {
        if (invoice.uuid === updatedInvoice.uuid) return updatedInvoice;
        return invoice;
      });

      return updatedInvoice;
    }

    throw new NotFoundException(`Invoice with id ${uuid} does not exist.`);
  }

  updateInvoicePartially(
    uuid: string,
    invoice: PartialUpdateInvoiceDto,
  ): InvoiceDto {
    const updateThisInvoice = this.invoices.find(
      (invoice) => invoice.uuid === uuid,
    );

    if (updateThisInvoice) {
      const updatedInvoice: InvoiceDto = {
        ...updateThisInvoice,
        ...invoice,
        uuid,
      };

      this.invoices = this.invoices.map((invoice) => {
        if (invoice.uuid === updatedInvoice.uuid) return updatedInvoice;
        return invoice;
      });

      return updatedInvoice;
    }

    throw new NotFoundException(`Invoice with id ${uuid} does not exist.`);
  }

  deleteInvoice(uuid: string): boolean {
    const invoiceToDelete = this.invoices.find(
      (invoice) => invoice.uuid === uuid,
    );

    if (invoiceToDelete) {
      this.invoices = this.invoices.filter((invoice) => invoice.uuid !== uuid);
      return true;
    }

    return false;
  }
}
