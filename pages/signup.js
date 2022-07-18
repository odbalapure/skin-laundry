import React from "react";
import Navbar from "../components/Navbar";
import SignupForm from "../components/SignupForm";

function singup() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-2">
        <SignupForm />
      </div>
    </React.Fragment>
  );
}

export default singup;