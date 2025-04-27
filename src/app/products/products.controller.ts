import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  private i = 0
  @Get('all-products')
    getAllProducts() {
      this.i += 1
      console.log('Request' + this.i)
      return (this.productsService.getAllProducts())
    }

}

