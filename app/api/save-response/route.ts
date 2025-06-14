// MongoDB API route logic
import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Assessment from '@/model/Assessment';

export async function POST(req: Request) {
  try {
    await connectToDatabase();
    const data = await req.json();
    const result = await Assessment.create(data);
    return NextResponse.json({ success: true, id: result._id });
  } catch (error: any) {
    console.error('DB Save Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
