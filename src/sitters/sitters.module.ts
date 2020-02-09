import { SittersService } from './sitters.service';
import { SittersController } from './sitters.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [SittersController],
  providers: [SittersService],
})
export class SittersModule {}
