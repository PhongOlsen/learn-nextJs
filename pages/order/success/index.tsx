const stripe = require("stripe");
import React, {useEffect} from "react";
import {useRouter} from "next/router";

export default function OrderSuccess () {
    const router = useRouter();
    const stripeClient = new stripe(process.env.STRIPE_SECRET_KEY);

    useEffect(() => {
     const handleGetInformation = async () => {
         if (router.query.session_id) {
             const session = await stripeClient.checkout.sessions.retrieve(router.query.session_id);
             return session.status
             // return await stripeClient.customers.retrieve(session.customer);
         }
         return ;
     };
     handleGetInformation().then((response) => console.log(response));
    })

    return <>
        Payment Success
    </>
}