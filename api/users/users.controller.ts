import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOkResponse({ description: 'User created.' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOkResponse({ description: 'All users retrieved.' })
  findAll() {
    console.log(this.usersService.findAll());
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'User with ${id} retrieved.' })
  findById(@Param('id') id: number) {
    return this.usersService.findById(+id);
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id: number) {
    try {
      return await this.usersService.delete(+id);
    } catch (err) {
      throw err;
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }
}
