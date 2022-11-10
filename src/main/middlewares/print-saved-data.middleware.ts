import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class PrintSavedDataMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('---------------------------');
    console.log(
      'Método HTTP:',
      req.method,
      '\nbody: ',
      req.body,
      '\ncontroller: ',
      req.path.split('/').at(1),
    );

    if (req.method === 'PUT') console.log('UUID: ', req.params.uuid);

    next();
  }
}
