import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticlesModule } from './articles/articles.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot(config.mongoUri, {useNewUrlParser: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
