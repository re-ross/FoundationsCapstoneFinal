import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
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
}
