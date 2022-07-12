import { useRouter } from "next/router";
import React from "react";
import Navbar from "../components/Navbar";
import CheckoutComponent from "../components/Checkout";

function Checkout() {
  const router = useRouter();
  const appointment = router.query;

  return (
    <React.Fragment>
      <Navbar />
      <CheckoutComponent appointment={appointment} />
    </React.Fragment>
  );
}

export default Checkout;