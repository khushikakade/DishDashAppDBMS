import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

class Platform extends Model {
  public platform_id!: number;
  public name!: string;
  public status!: 'Active' | 'Inactive';
  public commission_rate!: number;
}

Platform.init({
  platform_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.ENUM('Active', 'Inactive'),
    defaultValue: 'Active',
  },
  commission_rate: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00,
  },
}, {
  sequelize,
  tableName: 'platforms',
  timestamps: false,
});

export default Platform;
