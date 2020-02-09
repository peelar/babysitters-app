import { SittersService } from './sitters.service';
import { SittersController } from './sitters.controller';
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/providers/database/database.module';
import { sittersProviders } from './sitters.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SittersController],
  providers: [SittersService, ...sittersProviders],
})
export class SittersModule {}
