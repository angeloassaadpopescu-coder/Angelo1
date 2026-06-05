import { Controller, Post, Body } from '@nestjs/common';
import { ResearchService } from './research.service';

@Controller('research')
export class ResearchController {
  constructor(private readonly researchService: ResearchService) {}

  @Post('analyze')
  async analyze(@Body('topic') topic: string) {
    return this.researchService.research(topic);
  }
}
