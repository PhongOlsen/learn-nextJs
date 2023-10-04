const stripeServe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import {
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import React from "react";

const FormCheckout = () => {
    const stripe = useStripe();
    const elements = useElements();
    const transformedItem = {
        quantity: 1,
        price_data: {
            currency: "EUR",
            unit_amount: 678 * 100,
            product_data: {
                description: 'Phong',
                name: 'La Thanh Phong',
                images: ['https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'],
            },
        },
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const checkoutSession = await stripeServe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [transformedItem],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_APP_BASE_URL}/order/success` + `?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_BASE_URL}`,
            metadata: {
                images: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
            },
        });

        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    };

    return (
        <form>
            <button disabled={!stripe} onClick={handleSubmit}>
                Submit
            </button>
        </form>
    )
}
export default FormCheckout;