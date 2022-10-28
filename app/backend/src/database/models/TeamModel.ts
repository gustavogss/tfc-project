import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';

export default class TeamModel extends Model {
  id!: number;
  teamName!: string;
}

TeamModel.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});
