/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  Inject,
  HttpStatus,
  HttpException,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User, // private sequelize: Sequelize,
  ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.userName = createUserDto.userName;
    user.followers = createUserDto.followers;
    user.following = createUserDto.following;

    return user.save();
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll<User>();
  }

  findById(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  delete(id: number) {
    return this.usersRepository.destroy({ where: { id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.usersRepository.findOne({ where: { id } }).then((user) => {
      const values = {
        firstName: updateUserDto.firstName,
        lastName: updateUserDto.lastName,
        userName: updateUserDto.userName,
      };
      user.update(values);
    });
  }
}
