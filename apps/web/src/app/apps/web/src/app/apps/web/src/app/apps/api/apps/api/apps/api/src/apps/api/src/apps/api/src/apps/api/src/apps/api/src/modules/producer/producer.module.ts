import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { ProducerService } from './producer.service';
import { ProducerController } from './producer.controller';

@Module({
  imports: [BullModule.registerQueue({ name: 'producer' })],
  controllers: [ProducerController],
  providers: [ProducerService],
  exports: [ProducerService],
})
export class ProducerModule {}
