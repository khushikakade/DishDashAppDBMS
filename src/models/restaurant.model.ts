import { Schema, model, Document } from 'mongoose';

const menuItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cuisine: { type: String, required: true },
  menu: [menuItemSchema],
}, {
  timestamps: true,
});

export interface IMenuItem extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
}

export interface IRestaurant extends Document {
  name: string;
  address: string;
  cuisine: string;
  menu: IMenuItem[];
}

export default model<IRestaurant>('Restaurant', restaurantSchema);
