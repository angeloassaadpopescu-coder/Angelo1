import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class VoiceoverService {
  async generateVoiceover(text: string, voice: string = 'nova'): Promise<string> {
    try {
      const response = await axios.post('https://api.elevenlabs.io/v1/text-to-speech/' + voice, {
        text,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }, {
        headers: {
          'xi-api-key': process.env.ELEVENLABS_API_KEY,
        },
        responseType: 'arraybuffer',
      });
      return Buffer.from(response.data).toString('base64');
    } catch (error) {
      throw new Error(`Voiceover generation failed: ${error.message}`);
    }
  }
}
