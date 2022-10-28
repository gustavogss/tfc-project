import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

export default class UserModel extends Model {
  id!: number;
  email!: string;
  password!: string;
  role!: string;
  username!: string;
}

UserModel.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    allowNull: false,
    type: STRING,
  },
  role: {
    allowNull: false,
    type: STRING,
  },
  email: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});
