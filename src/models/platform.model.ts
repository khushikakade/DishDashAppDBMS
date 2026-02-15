import { Schema, model, Document } from 'mongoose';

export interface IPlatform extends Document {
  platform_name: string;
  service_area: string;
}

const platformSchema = new Schema({
  platform_name: {
    type: String,
    required: true,
    unique: true,
  },
  service_area: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default model<IPlatform>('Platform', platformSchema);
