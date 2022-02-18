import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'First name of user.',
    example: 'Timmy',
  })
  firstName: string;
  @ApiProperty({
    description: 'Last name of user',
    example: 'Tommy',
  })
  lastName: string;
  @ApiProperty({
    description: 'Username',
    example: '@timmytommy',
  })
  userName: string;
  @ApiProperty({
    description: 'Number of followers',
    example: 1,
  })
  followers: number;
  @ApiProperty({
    description: 'Number following.',
    example: 1000,
  })
  following: number;
}
