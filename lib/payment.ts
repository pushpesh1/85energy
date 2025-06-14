// Stripe helper logic
// lib/payment.ts
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY!);
export default stripe;
