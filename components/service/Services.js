import { useRouter } from "next/router";
import { useState } from "react";

function Services(props) {
  const router = useRouter();
  const [service, setService] = useState({});

  /**
   * @desc Select/Deselect a service
   * @param {*} event 
   * @param {*} selectedService 
   */
  const selectService = (event, selectedService) => {
    if (event.target.checked) {
      setService(selectedService);
    } else {
      setService({});
    }
  }

  /**
   * @desc Proceed to checkout
   */
  const goToCheckout = () => {
    if (!service) {
      console.log("Service is not selected!");
    } else {
      router.push({
        pathname: '/checkout',
        query: {
          id: service.id,
          name: service.name,
          description: service.description,
          code: service.code,
          price: parseFloat(service.price_info.sale_price),
          category: service.additional_info.category.name
        }
      }, "/checkout");
    }
  }

  return (
    <div className="mt-4 mb-5">
      <div className="mt-5 mb-4">
        <div><span className="fw-bold">ID:</span> {props.center.id}</div>
        <div><span className="fw-bold">Name:</span> {props.center.name}</div>
        <div><span className="fw-bold">Code:</span> {props.center.code}</div>
        <div><span className="fw-bold">Phone:</span> {!props.center.phone ? "000-000-000" : props.center.phone}</div>
        <div><span className="fw-bold">Email:</span> {!props.center.email ? "skinlaudnry@gmail.com" : props.center.email}</div>
        <div><span className="fw-bold">Tiemzone ID:</span> {props.center.time_zone_id}</div>
        <div><span className="fw-bold">Currency ID:</span> {props.center.currency_id}</div>
      </div>
      <hr />
      <div className="fs-4">Services • {props.services.length}</div>
      {props.services.map((service) => {
        return (
          <div key={service.id} className="card p-3">
            <div>Name: {service.name}</div>
            <div>Description: {service.description ? service.description : "NA"}</div>
            <div>Code: {service.code}</div>
            <div>Duration: {service.duration}m</div>
            <div>Price: ${service.price_info.sale_price}</div>
            <div>Categoty: {service.additional_info.category.name}</div>
            <div className="form-check">
              <input onChange={(event) => selectService(event, service)}
                className="form-check-input"
                type="radio"
                name="service"
                id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Select Service
              </label>
            </div>
          </div>
        );
      })}
      <hr />
      <button className="btn btn-primary" onClick={goToCheckout}>
        Proceed To Checkout
      </button>
    </div>
  );
}

export default Services;
