import { Column, Table, Model } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class Post extends Model {
  @ApiProperty({
    description: 'Username of post author',
    example: '@timmytommy',
  })
  @Column
  userName: string;

  @ApiProperty({
    description: 'Name of author',
    example: 'Timmy Tommy',
  })
  @Column
  displayName: string;

  @ApiProperty({
    description: 'Content of post',
    example: 'This is a string.',
  })
  @Column
  content: string;

  @ApiProperty({
    description: 'Image url for avatar',
    example: 'https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg',
  })
  @Column({ allowNull: true })
  avatar: string;

  @ApiProperty({
    description: 'Image url for image',
    example: 'https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg',
  })
  @Column({ allowNull: true })
  image: string;
}
