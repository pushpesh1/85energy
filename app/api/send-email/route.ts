// Email sending logic
import { NextResponse } from 'next/server';
import { sendAssessmentEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { email, name, summary } = await req.json();
    await sendAssessmentEmail(email, name, summary);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Email Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
