import { SittersModule } from './sitters/sitters.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [SittersModule],
})
export class AppModule {}
