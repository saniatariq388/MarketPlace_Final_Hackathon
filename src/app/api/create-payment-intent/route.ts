// src\app\api\create-payment-intent\route.ts
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)

export async function POST(req: NextRequest){
  
  try {
    const {amount} = await req.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    })

    console.log("✅",paymentIntent);
    
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentId: paymentIntent.id,
      amount: paymentIntent.amount,
      created: paymentIntent.created
    });
    
  } 
  catch (error) {
    console.error("❌", error);
    return NextResponse.json({error},{status: 500})
  }
}





















// // src\app\api\create-payment-intent\route.ts
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("📩 Received Body:", body);

//     const amount = body?.amount;
//     console.log("📊 Amount Type:", typeof amount, "Value:", amount);

//     if (typeof amount !== "number" || isNaN(amount) || amount <= 0) {
//       console.error("🚫 Invalid amount received:", amount);
//       return NextResponse.json(
//         { error: "Amount must be a valid positive number" },
//         { status: 400 }
//       );
//     }

//     const amountInCents = Math.round(amount);

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amountInCents, // Ensure integer (Stripe requires amount in cents)
//       currency: "usd",
//       automatic_payment_methods: { enabled: true },
//     });

//     console.log("✅ Payment Intent Created:", paymentIntent);

//     return NextResponse.json({
//       clientSecret: paymentIntent.client_secret,
//       paymentId: paymentIntent.id,
//       amount: paymentIntent.amount,
//       created: paymentIntent.created,
//     });
//   } catch (error: any) {
//     console.error("❌ Stripe Error:", error.message);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
