import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import MenuItem from './menuItem.model';
import Platform from './platform.model';

class PriceComparison extends Model {
  public comparison_id!: number;
  public item_id!: number;
  public platform_id!: number;
  public platform_base_price!: number;
  public packaging_charge!: number;
  public delivery_fee!: number;
  public discount_percentage!: number;
  public final_price!: number;
  public last_updated!: Date;
}

PriceComparison.init({
  comparison_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  item_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  platform_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  platform_base_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  packaging_charge: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  delivery_fee: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  discount_percentage: {
    type: DataTypes.DECIMAL(5, 2),
    defaultValue: 0.00,
  },
  final_price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: true, // Managed by DB generated column or logic
  },
  last_updated: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  tableName: 'price_comparisons',
  timestamps: false,
});

// Associations
PriceComparison.belongsTo(MenuItem, { foreignKey: 'item_id' });
MenuItem.hasMany(PriceComparison, { foreignKey: 'item_id' });

PriceComparison.belongsTo(Platform, { foreignKey: 'platform_id' });
Platform.hasMany(PriceComparison, { foreignKey: 'platform_id' });

export default PriceComparison;
