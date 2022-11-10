import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './main/app.controller';
import { AppService } from './main/app.service';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';
import { PrintSavedDataMiddleware } from './main/middlewares/print-saved-data.middleware';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './main/guards/auth.guard';

@Module({
  imports: [CustomerModule, InvoiceModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PrintSavedDataMiddleware)
      .forRoutes(
        { path: 'customer', method: RequestMethod.POST },
        { path: 'customer/:uuid', method: RequestMethod.PUT },
        { path: 'invoice', method: RequestMethod.POST },
        { path: 'invoice/:uuid', method: RequestMethod.PUT },
      );
  }
}
