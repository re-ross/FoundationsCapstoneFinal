import { Injectable, Inject } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from '../posts/entities/post.entity';
// import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class PostsService {
  constructor(
    @Inject('POSTS_REPOSITORY')
    private postsRepository: typeof Post, // private sequelize: Sequelize,
  ) {}
  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();

    post.userName = createPostDto.userName;
    post.displayName = createPostDto.displayName;
    post.content = createPostDto.content;
    post.avatar = createPostDto.avatar;
    post.image = createPostDto.image;

    return post.save();
  }

  async findAll(): Promise<Post[]> {
    return this.postsRepository.findAll<Post>();
  }

  findById(id: number): Promise<Post> {
    return this.postsRepository.findOne({ where: { id } });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    this.postsRepository.findOne({ where: { id } }).then((post) => {
      const values = {
        content: updatePostDto.content,
        image: updatePostDto.image,
      };
      post.update(values);
    });
  }

  delete(id: number) {
    return this.postsRepository.destroy({ where: { id } });
  }
}
