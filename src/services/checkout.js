import { loadStripe } from "@stripe/stripe-js";

const createCheckoutSession = async (priceId) => {
  console.log(process.env);
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/checkout-session`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: 1,
        priceId,
      }),
    }
  );

  return await response.json();
};

const checkout = async (priceId) => {
  const { sessionId } = await createCheckoutSession(priceId);
  const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
  await stripe.redirectToCheckout({
    sessionId,
  });
};

export { checkout };
