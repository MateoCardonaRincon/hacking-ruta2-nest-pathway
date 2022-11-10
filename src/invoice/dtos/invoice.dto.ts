import { InvoiceInterface } from '../interfaces/invoice.interface';
import { InvoiceDetailDto } from './invoice-detail.dto';

export class InvoiceDto implements InvoiceInterface {
  readonly uuid: string;
  readonly storeBranch: string;
  readonly detail: InvoiceDetailDto;
}
