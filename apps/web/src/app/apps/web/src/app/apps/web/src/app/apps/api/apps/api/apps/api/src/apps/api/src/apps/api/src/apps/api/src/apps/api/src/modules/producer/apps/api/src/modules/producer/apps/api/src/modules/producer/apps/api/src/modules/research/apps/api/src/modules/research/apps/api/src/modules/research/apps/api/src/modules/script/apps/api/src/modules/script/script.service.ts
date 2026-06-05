import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ScriptService {
  async generateScript(topic: string, duration: number): Promise<string> {
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are a documentary scriptwriter.',
          },
          {
            role: 'user',
            content: `Write a ${duration} second documentary script about ${topic}.`,
          },
        ],
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      throw new Error(`Script generation failed: ${error.message}`);
    }
  }
}
