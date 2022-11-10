import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class ResponseDateTimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        // data.responseDateTime = new Date().toLocaleString();
        return {
          response: data,
          responseDateTime: new Date().toLocaleString(),
        };
      }),
    );
  }
}
