import { Schema, model, Document } from 'mongoose';
import { IUser } from './user.model';
import { IPlatform } from './platform.model';

export interface IPriceComparison extends Document {
  user: IUser['_id'];
  platform: IPlatform['_id'];
  compare_price: number;
}

const priceComparisonSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  platform: {
    type: Schema.Types.ObjectId,
    ref: 'Platform',
    required: true,
  },
  compare_price: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IPriceComparison>('PriceComparison', priceComparisonSchema);
