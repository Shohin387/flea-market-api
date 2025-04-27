import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './app/products/products.module';
import { UserModule } from './app/user/user.module';
import { AuthenticationModule } from './app/authentication/authentication.module';
import { ActivateAcountModule } from './app/activate-acount/activate-acount.module';


@Module({
  imports: [ProductsModule, UserModule, AuthenticationModule, ActivateAcountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
