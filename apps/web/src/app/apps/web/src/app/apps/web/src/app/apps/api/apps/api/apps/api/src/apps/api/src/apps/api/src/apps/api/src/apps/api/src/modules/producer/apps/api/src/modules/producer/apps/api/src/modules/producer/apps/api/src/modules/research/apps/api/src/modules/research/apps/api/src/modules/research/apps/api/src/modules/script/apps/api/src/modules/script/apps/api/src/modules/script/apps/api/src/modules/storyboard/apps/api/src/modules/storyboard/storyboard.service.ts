import { Injectable } from '@nestjs/common';

@Injectable()
export class StoryboardService {
  async createStoryboard(script: string): Promise<any> {
    // Parse script into scenes and create storyboard
    const scenes = script.split('\n\n');
    return {
      scenes: scenes.map((scene, index) => ({
        sceneNumber: index + 1,
        description: scene,
        duration: 5,
        notes: '',
      })),
    };
  }
}
