import { Schema, model, Document } from 'mongoose';

const orderItemSchema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  restaurant: { type: Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [orderItemSchema],
  totalPrice: { type: Number, required: true },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Preparing', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
}, {
  timestamps: true,
});

export interface IOrderItem extends Document {
    name: string;
    quantity: number;
    price: number;
}

export interface IOrder extends Document {
  user: Schema.Types.ObjectId;
  restaurant: Schema.Types.ObjectId;
  items: IOrderItem[];
  totalPrice: number;
  status: string;
}

export default model<IOrder>('Order', orderSchema);
