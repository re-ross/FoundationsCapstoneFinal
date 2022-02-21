import { ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty({
    description: 'Username of post author',
    example: '@timmytommy',
  })
  userName: string;

  @ApiProperty({
    description: 'Name of author',
    example: 'Timmy Tommy',
  })
  displayName: string;

  @ApiProperty({
    description: 'Content of post',
    example: 'This is a string.',
  })
  content: string;

  @ApiProperty({
    description: 'Image url for avatar',
    example: 'https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg',
  })
  avatar: string;

  @ApiProperty({
    description: 'Image url for image',
    example: 'https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg',
  })
  image: string;
}
