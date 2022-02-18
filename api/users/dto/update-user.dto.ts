import { PartialType } from '@nestjs/mapped-types';
import { User } from '../entities/user.entity';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  static toUser(updateUserDto: UpdateUserDto): User {
    const user = new User();
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.userName = updateUserDto.userName;
    user.following = updateUserDto.following;
    user.followers = updateUserDto.followers;
    return user;
  }
}

export class UpdateUserResponse {
  message: string;
}
