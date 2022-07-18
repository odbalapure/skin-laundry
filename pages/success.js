import React, { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

function PaymentSuccess() {
  const [user, setUser] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("skin_laundry")) {
      setUser(JSON.parse(localStorage.getItem("skin_laundry")).user);
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <div className="container mt-5 d-flex align-items-center justify-content-center">
        <div className="card w-50">
          <div className="d-flex align-items-center justify-content-center p-3">
            <img height={300} width={400} src="https://cdn.dribbble.com/users/1238709/screenshots/4069900/media/92f9612042676a9db06e67a9533939f0.gif" />
          </div>
          <div className="card-body text-center">
            <div className="card-text">Hey there <span className="fw-bold">{router.query.name}</span>!</div>
            <div className="card-text">Your payment for <span className="fw-bold">{router.query.description}</span> was a success.</div>
          </div>
          <div className="card-footer">
            <Link href="/">
              <div className="d-grid gap-2">
                <button className="btn btn-success">Back To Home</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default PaymentSuccess;