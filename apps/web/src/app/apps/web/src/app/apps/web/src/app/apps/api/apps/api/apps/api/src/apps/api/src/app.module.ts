import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducerModule } from './modules/producer/producer.module';
import { ResearchModule } from './modules/research/research.module';
import { ScriptModule } from './modules/script/script.module';
import { StoryboardModule } from './modules/storyboard/storyboard.module';
import { ImageModule } from './modules/image/image.module';
import { VideoModule } from './modules/video/video.module';
import { VoiceoverModule } from './modules/voiceover/voiceover.module';
import { EditorModule } from './modules/editor/editor.module';
import { ThumbnailModule } from './modules/thumbnail/thumbnail.module';
import { SeoModule } from './modules/seo/seo.module';
import { YoutubeModule } from './modules/youtube/youtube.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379,
      },
    }),
    ProducerModule,
    ResearchModule,
    ScriptModule,
    StoryboardModule,
    ImageModule,
    VideoModule,
    VoiceoverModule,
    EditorModule,
    ThumbnailModule,
    SeoModule,
    YoutubeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
