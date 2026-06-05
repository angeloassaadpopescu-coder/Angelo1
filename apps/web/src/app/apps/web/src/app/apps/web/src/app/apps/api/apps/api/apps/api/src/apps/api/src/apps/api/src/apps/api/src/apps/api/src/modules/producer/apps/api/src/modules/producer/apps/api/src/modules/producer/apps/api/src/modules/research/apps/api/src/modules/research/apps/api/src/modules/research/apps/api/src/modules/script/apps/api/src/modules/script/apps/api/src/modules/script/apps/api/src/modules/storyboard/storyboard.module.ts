import { Module } from '@nestjs/common';
import { StoryboardService } from './storyboard.service';
import { StoryboardController } from './storyboard.controller';

@Module({
  controllers: [StoryboardController],
  providers: [StoryboardService],
  exports: [StoryboardService],
})
export class StoryboardModule {}
