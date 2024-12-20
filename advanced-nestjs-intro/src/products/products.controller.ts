import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('description') prodDesk: string,
    @Body('price') prodPrice: number,
  ): { productId: string; status: string; msg: string } {
    const generatedId = this.productsService.insertProduct(
      prodTitle,
      prodDesk,
      prodPrice,
    );
    return {
      productId: generatedId,
      status: 'ok',
      msg: 'Product successfully added',
    };
  }

  @Get()
  getAllProducts() {
    return { products: this.productsService.getProducts() };
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesk: string,
    @Body('price') prodPrice: number,
  ) {
    this.productsService.updateProduct(prodId, prodTitle, prodDesk, prodPrice);
    return { status: 'ok', msg: 'Product successfully updated' };
  }

  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
    this.productsService.deleteProduct(prodId);
    return { status: 'ok', msg: 'Product successfully deleted' };
  }
}
