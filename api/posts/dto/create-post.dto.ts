import { ApiProperty, ApiBody } from '@nestjs/swagger';
export class CreatePostDto {
  @ApiProperty({
    description: 'String content of a post',
    example: 'This is a sample post.',
  })
  content: string;
  //   submittedBy: string;
}
