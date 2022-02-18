import { PrimaryKey, Column, Model, Table } from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class User extends Model {
  // @PrimaryKey
  @Column({ defaultValue: uuidv4() })
  // id: string;
  @ApiProperty({
    description: 'First name of user.',
    example: 'Timmy',
  })
  firstName: string;

  @ApiProperty({
    description: 'Last name of user',
    example: 'Tommy',
  })
  // @Column
  lastName: string;

  @ApiProperty({
    description: 'Username',
    example: '@timmytommy',
  })
  // @Column
  userName: string;

  @ApiProperty({
    description: 'Number of followers',
    example: 1,
  })
  // @Column
  followers: number;

  @ApiProperty({
    description: 'Number following.',
    example: 1000,
  })
  // @Column
  following: number;
}
