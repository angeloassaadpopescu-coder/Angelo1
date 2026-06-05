import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ResearchService {
  async research(topic: string): Promise<any> {
    try {
      const response = await axios.get(`https://api.serpapi.com/search`, {
        params: {
          q: topic,
          api_key: process.env.SERPAPI_KEY,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(`Research failed: ${error.message}`);
    }
  }
}
