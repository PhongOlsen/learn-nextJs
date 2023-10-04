const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});
import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import FormCheckout from "@/src/components/checkout/FormCheckout";

const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const stripePromise = publishableKey && loadStripe(publishableKey);

export default function Checkout() {
    const[clientSecret, setClientSecret] = useState();

    useEffect(() => {
        const handleGetSecretKey = async () => {
            const paymentIntent = await stripe.paymentIntents.create({
                currency: "EUR",
                amount: 1999,
                automatic_payment_methods: { enabled: true },
            });
            setClientSecret(paymentIntent.client_secret)
        }
        handleGetSecretKey().then(() => null)
    }, [])

    if (!clientSecret) return <>Loading</>

    return (
        <Elements stripe={stripePromise as any} options={{ clientSecret }}>
            <FormCheckout />
        </Elements>
    )
}