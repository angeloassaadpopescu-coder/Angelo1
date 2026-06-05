import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class ProducerService {
  constructor(@InjectQueue('producer') private queue: Queue) {}

  async createDocumentary(data: any) {
    return await this.queue.add('create-documentary', data, {
      attempts: 3,
      backoff: {
        type: 'exponential',
        delay: 2000,
      },
    });
  }
}
