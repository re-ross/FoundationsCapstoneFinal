import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Display name of user.',
    example: 'Timmy Tommy',
  })
  displayName: string;
  @ApiProperty({
    description: 'Username of user',
    example: '@timmytommy',
  })
  userName: string;
  @ApiProperty({
    description: 'Image url for avatar',
    example: 'https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg',
  })
  avatar: string;
}
