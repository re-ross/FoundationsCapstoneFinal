import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '../posts/entities/post.entity';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: typeof Post,
    private sequelize: Sequelize,
  ) {}
  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();

    post.content = createPostDto.content;

    return post.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postsRepository.findAll<Post>();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
