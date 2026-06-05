import { Controller, Post, Body } from '@nestjs/common';
import { ProducerService } from './producer.service';

@Controller('producer')
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('create')
  async createDocumentary(@Body() data: any) {
    return this.producerService.createDocumentary(data);
  }
}
