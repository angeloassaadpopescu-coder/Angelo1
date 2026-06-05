import { Module } from '@nestjs/common';
import { ScriptService } from './script.service';
import { ScriptController } from './script.controller';

@Module({
  controllers: [ScriptController],
  providers: [ScriptService],
  exports: [ScriptService],
})
export class ScriptModule {}
