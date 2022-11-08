import { Injectable, NotFoundException } from '@nestjs/common';
import { InvoiceDto } from '../dtos/invoice.dto';
import { PartialUpdateInvoiceDto } from '../dtos/partial-update-invoice.dto';
import { UpdateInvoiceDto } from '../dtos/update-invoice.dto';
import { invoiceList } from '../utils/invoice-list';

@Injectable()
export class InvoiceService {
  getAll(): InvoiceDto[] {
    return invoiceList;
  }

  getInvoiceById(uuid: string): InvoiceDto | NotFoundException {
    const invoiceFound = invoiceList.find((invoice) => invoice.uuid === uuid);

    return (
      invoiceFound ??
      new NotFoundException(`Invoice with id ${uuid} does not exist.`)
    );
  }

  saveInvoice(invoice: InvoiceDto): InvoiceDto {
    return invoice;
  }

  updateInvoice(
    uuid: string,
    invoice: UpdateInvoiceDto,
  ): UpdateInvoiceDto | NotFoundException {
    const updateThisInvoice = invoiceList.find(
      (invoice) => invoice.uuid === uuid,
    );

    if (updateThisInvoice) {
      return {
        uuid,
        detail: {
          price: invoice.detail?.price,
          product: invoice.detail?.product,
          seller: invoice.detail?.seller,
        },
      };
    }

    return new NotFoundException(`Invoice with id ${uuid} does not exist.`);
  }

  updateInvoicePartially(
    uuid: string,
    invoice: PartialUpdateInvoiceDto,
  ): PartialUpdateInvoiceDto | NotFoundException {
    const updateThisInvoice = invoiceList.find(
      (invoice) => invoice.uuid === uuid,
    );

    if (updateThisInvoice) {
      return {
        uuid,
        detail: {
          price: invoice.detail?.price ?? updateThisInvoice.detail.price,
          product: invoice.detail?.product ?? updateThisInvoice.detail.product,
          seller: invoice.detail?.seller ?? updateThisInvoice.detail.seller,
        },
      };
    }

    return new NotFoundException(`Invoice with id ${uuid} does not exist.`);
  }

  deleteInvoice(uuid: string): boolean {
    const invoiceToDelete = invoiceList.find(
      (invoice) => invoice.uuid === uuid,
    );

    if (invoiceToDelete) return true;

    return false;
  }
}
