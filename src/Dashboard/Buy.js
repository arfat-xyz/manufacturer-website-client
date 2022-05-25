import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1qJUIeyenGQUlo9sCfEIELDfYLH4FWnFqBRRVOAk1Z3Ag0U0usxfq6zl1Lm3hvcwoKtUdUE1gPGraHna2e8Evt00zk4EDgLG"
);
const Buy = () => {
  const params = useParams();
  const id = params.id;
  const url = `https://floating-mountain-13716.herokuapp.com/pay/${id}`;
  const { isLoading, data: order } = useQuery(["buyorder", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        auth: `bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 my-12 shadow-xl">
        <div class="card-body">
          <p className="text-success">Hello, {order.user_name}</p>
          <h2 class="card-title">
            Pay for <strong>{order.product_name}</strong>
          </h2>
          <p>You ordered {order.quantity} pices </p>
          <p>Your total price is ${order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          {" "}
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Buy;
