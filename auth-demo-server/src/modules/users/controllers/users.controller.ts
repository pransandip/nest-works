import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  Body,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('filter') filter: string,
    @Query('sortBy') sortBy: string,
    @Query('id', ParseIntPipe) id: number,
    @Query('transactionData', ParseBoolPipe) transactionData: boolean,
  ) {
    console.log({ id, filter, sortBy, transactionData });
    return { username: 'sandy', msg: 'successfully fetched user' };
  }

  @Post('/create')
  createUser(@Req() request: Request, @Res() response: Response) {
    console.log(request.body);
    response.sendStatus(201);
  }

  @Post('/create-v2')
  @UsePipes(new ValidationPipe())
  createUserV2(@Body() userData: CreateUserDto) {
    console.log(userData.username);
    return userData;
  }
}
