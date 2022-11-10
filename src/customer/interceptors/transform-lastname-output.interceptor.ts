import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { CustomerInterface } from '../interfaces/customer.interface';

@Injectable()
export class TransformLastnameOutputInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        if (data instanceof Array) {
          return data.map((customer: CustomerInterface) =>
            customer.lastname === undefined
              ? { ...customer, lastname: null }
              : customer,
          );
        }

        return data.lastname === undefined ? { ...data, lastname: null } : data;
      }),
    );
  }
}
