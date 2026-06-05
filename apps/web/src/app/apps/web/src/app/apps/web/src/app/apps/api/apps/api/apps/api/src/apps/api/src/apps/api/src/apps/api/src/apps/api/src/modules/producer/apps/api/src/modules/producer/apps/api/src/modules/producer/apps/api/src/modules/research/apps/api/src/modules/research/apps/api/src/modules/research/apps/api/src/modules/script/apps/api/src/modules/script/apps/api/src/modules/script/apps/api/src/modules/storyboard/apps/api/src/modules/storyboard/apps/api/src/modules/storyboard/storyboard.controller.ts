import { Controller, Post, Body } from '@nestjs/common';
import { StoryboardService } from './storyboard.service';

@Controller('storyboard')
export class StoryboardController {
  constructor(private readonly storyboardService: StoryboardService) {}

  @Post('create')
  async create(@Body('script') script: string) {
    return this.storyboardService.createStoryboard(script);
  }
}
