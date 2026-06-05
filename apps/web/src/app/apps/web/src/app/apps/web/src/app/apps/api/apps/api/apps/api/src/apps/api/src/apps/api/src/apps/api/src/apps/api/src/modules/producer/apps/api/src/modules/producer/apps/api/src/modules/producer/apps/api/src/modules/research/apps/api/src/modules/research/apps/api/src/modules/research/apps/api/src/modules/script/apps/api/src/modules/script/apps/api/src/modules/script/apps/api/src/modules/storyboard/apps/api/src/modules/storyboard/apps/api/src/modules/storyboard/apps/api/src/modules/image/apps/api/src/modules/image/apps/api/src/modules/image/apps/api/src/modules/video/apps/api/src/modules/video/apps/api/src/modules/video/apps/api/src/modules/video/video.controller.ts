import { Controller, Post, Body } from '@nestjs/common';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post('generate')
  async generate(@Body() data: { prompt: string; duration: number }) {
    return this.videoService.generateVideo(data.prompt, data.duration);
  }
}
