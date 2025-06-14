import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  systemSize: String,
  brand: String,
  type: String,
  phase: String,
  count: Number,
  roof: String,
  price: Number,
});

export default mongoose.models.Package || mongoose.model('Package', packageSchema);
