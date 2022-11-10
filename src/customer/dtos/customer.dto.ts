import { CustomerInterface } from '../interfaces/customer.interface';

export class CustomerDto implements CustomerInterface {
  readonly uuid: string;
  readonly name: string;
  readonly lastname?: string;
  readonly phoneNumber: string;
  readonly email: string;
}
