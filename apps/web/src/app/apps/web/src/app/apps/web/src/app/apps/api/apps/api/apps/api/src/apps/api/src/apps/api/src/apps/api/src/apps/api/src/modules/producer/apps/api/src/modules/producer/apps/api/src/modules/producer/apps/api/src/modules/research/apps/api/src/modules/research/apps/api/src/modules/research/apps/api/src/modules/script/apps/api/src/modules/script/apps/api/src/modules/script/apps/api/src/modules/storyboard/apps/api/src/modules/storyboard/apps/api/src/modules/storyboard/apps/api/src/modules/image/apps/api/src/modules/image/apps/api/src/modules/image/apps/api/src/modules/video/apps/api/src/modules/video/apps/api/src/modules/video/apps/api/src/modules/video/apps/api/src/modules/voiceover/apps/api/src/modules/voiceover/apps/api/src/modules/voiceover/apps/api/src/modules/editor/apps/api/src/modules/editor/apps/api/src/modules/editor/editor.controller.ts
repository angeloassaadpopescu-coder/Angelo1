import { Controller, Post, Body } from '@nestjs/common';
import { EditorService } from './editor.service';

@Controller('editor')
export class EditorController {
  constructor(private readonly editorService: EditorService) {}

  @Post('edit')
  async edit(@Body() data: { videoUrl: string; edits: any }) {
    return this.editorService.editVideo(data.videoUrl, data.edits);
  }
}
