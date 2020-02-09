import { SittersModule } from './sitters/sitters.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [SittersModule, ConfigModule.forRoot()],
})
export class AppModule {}
