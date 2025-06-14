import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI in .env.local');
}

const packageSchema = new mongoose.Schema({
  systemSize: String,
  brand: String,
  type: String,
  phase: String,
  count: Number,
  roof: String,
  price: Number,
});

const Package = mongoose.models.Package || mongoose.model('Package', packageSchema);

async function seed() {
  await mongoose.connect(MONGODB_URI);

  const packages = [
    {
      systemSize: '6.6kW',
      brand: 'Jinko 475 Tiger Neo',
      type: 'Mono',
      phase: 'Single',
      count: 14,
      roof: 'All',
      price: 999,
    },
    {
      systemSize: '13.2kW',
      brand: 'Jinko 475 Tiger Neo',
      type: 'Mono',
      phase: 'Three',
      count: 28,
      roof: 'All',
      price: 6655,
    },
    {
      systemSize: '10.5kW',
      brand: 'JA Solar 440 Bifacial',
      type: 'Bifacial',
      phase: 'Three',
      count: 24,
      roof: 'All',
      price: 4049,
    },
  ];

  await Package.deleteMany({});
  await Package.insertMany(packages);
  console.log(`✅ Seeded ${packages.length} solar packages`);
  await mongoose.disconnect();
}

seed().catch((err) => {
  console.error('❌ Seed error:', err);
  process.exit(1);
});
