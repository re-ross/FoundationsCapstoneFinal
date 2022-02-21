import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({
    description: 'Updated string content of a post',
    example: 'This is a sample post.',
  })
  content: string;
  @ApiProperty({
    description: 'Image url for image',
    example: 'https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg',
  })
  image: string;
}
