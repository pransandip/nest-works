import { Injectable, PipeTransform, Logger } from '@nestjs/common';

@Injectable()
export class FreezePipe implements PipeTransform {
  private readonly logger = new Logger(FreezePipe.name);

  transform(value: any) {
    this.logger.log('FreezePipe running...');
    Object.freeze(value);
    return value;
  }
}
