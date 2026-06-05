import { Controller, Post, Body } from '@nestjs/common';
import { VoiceoverService } from './voiceover.service';

@Controller('voiceover')
export class VoiceoverController {
  constructor(private readonly voiceoverService: VoiceoverService) {}

  @Post('generate')
  async generate(@Body() data: { text: string; voice?: string }) {
    return this.voiceoverService.generateVoiceover(data.text, data.voice);
  }
}
