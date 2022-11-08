/* eslint-disable prettier/prettier */

import { InvoiceInterface } from '../interfaces/invoice.interface';

export const invoiceList: InvoiceInterface[] = [
  {
    uuid: 'dd9bafaa-51de-4cdd-9a6c-4db6e5299112',
    detail: { price: 50000, product: 'Camiseta', seller: 'Paula' },
  },
  {
    uuid: 'a3f67d07-5be5-419e-95c6-56ff865175fa',
    detail: { price: 30000, product: 'Cinturón', seller: 'Fabián' },
  },
  {
    uuid: '477db8a0-1cd6-4532-809d-1d7df84c06cc',
    detail: { price: 150000, product: 'Chaqueta', seller: 'Juliana' },
  },
];
