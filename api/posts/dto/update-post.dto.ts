import { ApiProperty } from '@nestjs/swagger';

export class UpdatePostDto {
  @ApiProperty({
    description: 'Updated string content of a post',
    example: 'This is a sample post.',
  })
  content: string;
}
