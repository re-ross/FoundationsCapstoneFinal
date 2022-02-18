import { Sequelize } from 'sequelize-typescript';
import { User } from '../users/entities/user.entity';
import { Post } from '../posts/entities/post.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'ryanross',
        password: '',
        database: 'ryanross',
      });
      sequelize.addModels([User, Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

export class DatabaseProviders {}
