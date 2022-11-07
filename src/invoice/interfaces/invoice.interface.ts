import { InvoiceDetailInterface } from './invoice-detail.interface';

export interface InvoiceInterface {
  uuid: string;
  detail: InvoiceDetailInterface;
}
