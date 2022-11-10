import { InvoiceDetailInterface } from './invoice-detail.interface';

export interface PartialInvoiceInterface {
  storeBranch?: string;
  detail?: InvoiceDetailInterface;
}
