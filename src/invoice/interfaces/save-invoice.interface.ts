import { InvoiceDetailInterface } from './invoice-detail.interface';

export interface SaveInvoiceInterface {
  storeBranch: string;
  detail: InvoiceDetailInterface;
}
