import {
  Body,
  Controller,
  Get,
  Header,
  Post,
  InternalServerErrorException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FreezePipe } from './pipes/freeze.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'application/json')
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  examplePost(@Body(new FreezePipe()) body: any) {
    body.test = '123';
    return body;
  }

  @Get('error')
  throwError() {
    throw new InternalServerErrorException();
  }
}
