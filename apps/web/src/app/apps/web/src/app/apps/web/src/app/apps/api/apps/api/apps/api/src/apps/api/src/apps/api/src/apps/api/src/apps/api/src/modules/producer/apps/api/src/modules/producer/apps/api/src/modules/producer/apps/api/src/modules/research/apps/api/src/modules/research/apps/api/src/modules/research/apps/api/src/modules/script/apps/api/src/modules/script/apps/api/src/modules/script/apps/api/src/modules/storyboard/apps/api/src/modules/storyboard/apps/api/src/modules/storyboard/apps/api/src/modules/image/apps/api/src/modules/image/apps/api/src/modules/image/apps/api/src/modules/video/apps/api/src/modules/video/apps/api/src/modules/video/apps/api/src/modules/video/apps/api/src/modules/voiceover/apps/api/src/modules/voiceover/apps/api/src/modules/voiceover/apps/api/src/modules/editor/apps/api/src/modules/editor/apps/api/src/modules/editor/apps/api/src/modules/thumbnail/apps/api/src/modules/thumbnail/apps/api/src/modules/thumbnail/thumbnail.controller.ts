import { Controller, Post, Body } from '@nestjs/common';
import { ThumbnailService } from './thumbnail.service';

@Controller('thumbnail')
export class ThumbnailController {
  constructor(private readonly thumbnailService: ThumbnailService) {}

  @Post('generate')
  async generate(@Body() data: { title: string; imageUrl: string }) {
    return this.thumbnailService.generateThumbnail(data.title, data.imageUrl);
  }
}
