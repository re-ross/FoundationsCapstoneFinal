import {
  PrimaryKey,
  Table,
  HasMany,
  AutoIncrement,
  Column,
  Model,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'posts/entities/post.entity';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  userId: number;

  @ApiProperty({
    description: 'First name of user.',
    example: 'Timmy',
  })
  @Column
  firstName: string;

  @ApiProperty({
    description: 'Last name of user',
    example: 'Tommy',
  })
  @Column
  lastName: string;

  @ApiProperty({
    description: 'Username',
    example: '@timmytommy',
  })
  @Column
  userName: string;

  @ApiProperty({
    description: 'Number of followers',
    example: 1,
  })
  @Column
  followers: number;

  @ApiProperty({
    description: 'Number following.',
    example: 1000,
  })
  @Column
  following: number;

  @HasMany(() => Post)
  posts: Post[];
}
