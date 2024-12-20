import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestService } from 'src/request/request.service';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  private readonly logger = new Logger(ExampleMiddleware.name);
  constructor(private readonly requestService: RequestService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(ExampleMiddleware.name);
    const userId = 'OX1447EV';
    this.requestService.setUserId(userId);
    next();
  }
}
