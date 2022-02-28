/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User, // private sequelize: Sequelize,
  ) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    const user = new User();

    user.displayName = createUserDto.displayName;
    user.userName = createUserDto.userName;
    user.avatar = createUserDto.avatar;

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
        displayName: updateUserDto.displayName,
        userName: updateUserDto.userName,
        avatar: updateUserDto.avatar,
      };
      user.update(values);
    });
  }
}
