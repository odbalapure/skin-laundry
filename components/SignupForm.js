import { useRef, useState } from "react";
import axios from "axios";
import env from "../config";
import { useRouter } from "next/router";

function SignupForm() {
  // Nextjs router
  const router = useRouter();

  // Messages
  const [warning, setWarning] = useState("");
  const [success, setSuccess] = useState("");

  // Form data
  const firstName = useRef();
  const lastName = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  /**
   * @desc Signup function
   */
  const signup = async () => {
    if (
      firstName.current.value === "" ||
      lastName.current.value === "" ||
      emailRef.current.value === "" ||
      phoneRef.current.value === ""
    ) {
      console.log("All fields are mandatory!");
      setWarning("All fields are mandatory!");
      setTimeout(() => {
        setWarning("");
      }, 3000);
      return;
    }

    try {
      const response = await axios.post(`${env.api}/guests`, {
        "center_id": "2e70224d-a868-47a6-8e56-ff30e5b3668c",
        "personal_info": {
          "first_name": firstName.current.value,
          "last_name": lastName.current.value,
          "mobile_phone": {
            "country_code": 95,
            "number": phoneRef.current.value
          },
          "email": emailRef.current.value
        }
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "bearer " + env.token
        },
      });

      setSuccess("Signup done successfully!");
      localStorage.setItem("skin_laundry", JSON.stringify({
        center_id: response?.data.center_id,
        id: response?.data.id,
        createdData: response?.data.created_date,
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
      }));

      router.push("/");
    } catch (error) {
      console.log("Singup failed...", error);
    }
  }

  return (
    <div
      className="container d-flex justify-content-center flex-column"
    >
      <div
        style={{
          border: "1px solid lightgray",
          padding: "1rem",
          margin: "2rem",
          borderRadius: "1rem",
          boxSizing: "border-box",
        }}
      >
        <form>
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter first name"
                ref={firstName}
              />
            </div>
            <div className="col-lg-6 col-md-12 mb-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter last name"
                ref={lastName}
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter phone number"
              ref={phoneRef}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter email address"
              ref={emailRef}
            />
          </div>
          <div className="d-grid gap-2">
            <button
              className="btn btn-success"
              type="button"
              onClick={signup}
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
      <div>
        {warning ? (
          <p
            className="d-flex justify-content-center alert alert-danger"
            role="alert"
          >
            {warning}
          </p>
        ) : null}
      </div>
      <div>
        {success ? (
          <p
            className="d-flex justify-content-center alert alert-success"
            role="alert"
          >
            {success}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default SignupForm;