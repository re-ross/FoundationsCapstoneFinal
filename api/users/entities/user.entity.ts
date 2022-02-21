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
    description: 'Display name of user.',
    example: 'Timmy Tommy',
  })
  @Column
  displayName: string;

  @ApiProperty({
    description: 'Username',
    example: '@timmytommy',
  })
  @Column
  userName: string;

  @ApiProperty({
    description: 'Image url for avatar',
    example: 'https://www.aceshowbiz.com/images/photo/ryan_reynolds.jpg',
  })
  @Column
  avatar: string;
}
