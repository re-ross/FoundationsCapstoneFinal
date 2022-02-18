import {
  Column,
  Model,
  Table,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Post extends Model {
  @ApiProperty({
    description: 'Text content of post.',
    example: 'This is sample text 123, 123.',
  })
  content: string;

  @ApiProperty({
    description: 'Number of likes on a post',
    example: '15',
  })
  likes: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @BelongsTo(() => User)
  user: User;
}
