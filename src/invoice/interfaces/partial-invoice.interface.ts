import { InvoiceDetailInterface } from './invoice-detail.interface';

export interface PartialInvoiceInterface {
  uuid?: string;
  detail?: InvoiceDetailInterface;
}
