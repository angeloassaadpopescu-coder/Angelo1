import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ImageService {
  async generateImage(prompt: string): Promise<string> {
    try {
      const response = await axios.post('https://api.flux.ai/v1/images/generate', {
        prompt,
        num_images: 1,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.FLUX_API_KEY}`,
        },
      });
      return response.data.data[0].url;
    } catch (error) {
      throw new Error(`Image generation failed: ${error.message}`);
    }
  }
}
