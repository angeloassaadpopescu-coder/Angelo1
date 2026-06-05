import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class VideoService {
  async generateVideo(prompt: string, duration: number): Promise<string> {
    try {
      const response = await axios.post('https://api.runway.ml/v1/videos/create', {
        prompt,
        duration,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.RUNWAY_API_KEY}`,
        },
      });
      return response.data.video_url;
    } catch (error) {
      throw new Error(`Video generation failed: ${error.message}`);
    }
  }
}
