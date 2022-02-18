import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { postsProviders } from '../posts/provider/posts.providers';

@Module({
  controllers: [PostsController],
  providers: [PostsService, ...postsProviders],
})
export class PostsModule {}
