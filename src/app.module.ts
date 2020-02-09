import { SittersModule } from './sitters/sitters.module';
import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';

@Module({
  imports: [
    SittersModule,
    EasyconfigModule.register({ path: './config/.env' }),
  ],
})
export class AppModule {}
