import { Schema, model, Document } from 'mongoose';

export interface IProduct extends Document {
  product_name: string;
  category: string;
}

const productSchema = new Schema({
  product_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IProduct>('Product', productSchema);
