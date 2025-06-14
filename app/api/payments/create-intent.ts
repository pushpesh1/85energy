// Stripe intent logic
import { NextResponse } from 'next/server';
import  stripe  from '@/lib/payment';

export async function POST(req: Request) {
  try {
    const { amount, currency = 'inr', customerEmail } = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      receipt_email: customerEmail,
      payment_method_types: ['card', 'upi'],
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error: any) {
    console.error('Stripe error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
