import { Schema, model, Document } from 'mongoose';
import { IProduct } from './product.model';
import { IPriceComparison } from './priceComparison.model';

export interface IRedirection extends Document {
  product: IProduct['_id'];
  priceComparison: IPriceComparison['_id'];
  redirection_url: string;
}

const redirectionSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  priceComparison: {
    type: Schema.Types.ObjectId,
    ref: 'PriceComparison',
    required: true,
  },
  redirection_url: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IRedirection>('Redirection', redirectionSchema);
