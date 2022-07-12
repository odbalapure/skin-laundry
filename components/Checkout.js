import { useRouter } from "next/router";
import { useState } from "react";

function Checkout(props) {
  const router = useRouter();

  // Basic details
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  // Card details
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvv, setCvv] = useState(0);

  // Warning message
  const [warning, setWarning] = useState("");

  /**
   * @desc Make payment (DUMMY)
   */
  const makePayment = () => {
    if (mobile.length < 10 || !(/^\d+$/.test(mobile))) {
      setWarning("Some weird phone no. you got there...🥲");
      setTimeout(() => setWarning(""), 5000);
      return;
    }

    if (name === ""
      || mobile === ""
      || address === ""
      || cardName === ""
      || cardNumber === ""
      || month === ""
      || year === ""
      || cvv === "") {
      setWarning(`
      Seems like you missed out some fields...or maybe most of it! 🧐`);
      setTimeout(() => setWarning(""), 5000);
      return;
    }

    router.push({
      pathname: '/success',
      query: {
        name,
        mobile,
        address,
        cardName,
        cardNumber,
        month,
        year,
        cvv,
        description: props.appointment.description,
        category: props.appointment.category,
        price: props.appointment.price
      }
    }, "/success");
  }

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {/* Accordion */}
      <div className="accordion mt-5 mb-3" id="accordionFlushExample" style={{ width: "60%" }}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed fw-bold fs-5 bg-danger text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Your basic details
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <form
              className="border"
              style={{
                margin: "2rem",
                border: "1px solid lightgray",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0px 3px 22px 0px rgba(0,0,0,0.10)"
              }}
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter full name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter mobile number"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed fw-bold fs-5 bg-danger text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Enter credit card details
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="card m-4">
              <div className="card-header fw-bold">
                Credit Card
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name on the card"
                    onChange={(e) => setCardName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Credit Card Number
                  </label>
                  <div className="input-group mb-3">
                    <input id="cardNumber" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="0000 0000 0000 0000" onChange={(e) => setCardNumber(e.target.value)} />
                    <span className="input-group-text"><i className="bi bi-credit-card-2-back-fill"></i></span>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <label htmlFor="cardNumber" className="form-label">
                      Month
                    </label>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setMonth(e.target.value)}>
                      <option>Month</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="form-label">
                      Year
                    </label>
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setYear(e.target.value)}>
                      <option>Year</option>
                      <option value="2019">2019</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="form-label">
                      CVV
                    </label>
                    <div className="input-group mb-3">
                      <input id="cardNumber" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" placeholder="123" onChange={(e) => setCvv(e.target.value)} />
                    </div>
                  </div>
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
              </div>
              <div className="card-footer">
                <div className="d-grid gap-2">
                  <button className="btn btn-danger" onClick={makePayment}>Make Payment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Order details */}
      <div
        className="mt-5"
        style={{
          border: "1px solid lightgray",
          padding: "2rem",
          borderRadius: "1rem",
          height: "18rem",
          display: "inline",
          boxSizing: "border-box"
        }}
      >
        <div className="mb-2">ORDER SUMMARY</div>
        <div className="fw-bold">{props.appointment.name}</div>
        <div>{props.appointment.description}</div>
        <div className="mb-3"><span className="fw-bold">Categoty:</span> {props.appointment.category}</div>
        <div>
          <span className="fw-bold">Service Charge:</span> ${parseFloat(props.appointment.price)}
        </div>
        <div>
          <span className="fw-bold">Convinience Fee:</span> $5
        </div>
        <hr />
        <div>
          <p className="fs-5 fw-bolder text-danger">
            Grand Total: ${parseFloat(props.appointment.price) + parseFloat(5.00)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;