import { Controller, Post, Body } from '@nestjs/common';
import { ScriptService } from './script.service';

@Controller('script')
export class ScriptController {
  constructor(private readonly scriptService: ScriptService) {}

  @Post('generate')
  async generate(@Body() data: { topic: string; duration: number }) {
    return this.scriptService.generateScript(data.topic, data.duration);
  }
}
