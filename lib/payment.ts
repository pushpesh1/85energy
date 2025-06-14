// Stripe helper logic
// lib/payment.ts
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil', // Use the correct version matching your Stripe SDK
});

export default stripe;

