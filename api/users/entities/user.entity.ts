import {
  PrimaryKey,
  Table,
  AutoIncrement,
  Column,
  Model,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

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
}
