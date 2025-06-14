import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/db';

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

export async function GET() {
  try {
    await connectToDatabase();
    const packages = await Package.find({});
    return NextResponse.json({ packages });
  } catch (error: any) {
    console.error('Fetch Packages Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
