'use client';


import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';




function CheckoutForm({amount} : {amount: number}) {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState<string>('');
  const [error, setError] = useState<string>('');


  useEffect(() => {
    // Create PaymentIntent on the server
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log('Client Secret:', data.clientSecret); 
        console.log("payment 😈",<PaymentElement />);
        if (data.clientSecret) {
          localStorage.setItem('paymentDetails', JSON.stringify({
            id: data.paymentId,
            date: data.created,
            amount: data.amount,
          }));
        }
      });
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    // Call elements.submit() immediately when the user clicks pay.
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setError(submitError.message || 'Submission failed');
      return;
    }

    // Then confirm the payment.
    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.origin}/PaymentSuccessPage`,
      },
    });

    localStorage.setItem("cart", JSON.stringify([]));

    if (confirmError) {
      setError(confirmError.message || 'Payment confirmation failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-10 flex justify-center flex-col gap-6 text-black">
        {clientSecret && <PaymentElement />}
       
        {error && <p className="text-red-600">{error}</p>}
        <button className="bg-black text-white p-5" type="submit">
          Payment ({(amount).toLocaleString()})
        </button>
      </div>
    </form>
  );
}

export default CheckoutForm;



// "use client";

// import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
// import { useState } from "react";

// export default function CheckoutForm({ amount }: { amount: number }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!stripe || !elements) {
//       setError("Stripe is not loaded yet.");
//       return;
//     }

//     setLoading(true);
//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: `${window.location.origin}/PaymentSuccessPage`,
//       },
//       redirect: "if_required", // Automatically handles redirects
//     });

//     if (error) {
//       console.error("Payment Error:", error.message);
//       setError(error.message || "Payment failed.");
//     } else {
//       console.log("✅ Payment Successful:", paymentIntent);
//       alert("Payment Successful!");
//     }

//     setLoading(false);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto text-black">
//       <h2 className="text-xl font-bold mb-4">Complete Your Payment</h2>
//       {error && <div className="text-red-500 mb-2">{error}</div>}
//       <PaymentElement />
//       <button
//         type="submit"
//         disabled={!stripe || loading}
//         className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
//       >
//         {loading ? "Processing..." : `Pay $${(amount / 100).toFixed(2)}`}
//       </button>
//     </form>
//   );
// }








