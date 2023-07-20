import React from "react";
import "./Services.css";
import star from "../components/icons/star.svg";
import diamond from "../components/icons/diamond.svg";
import rental from "../components/icons/11.svg";

const Services = () => {
  return (
    <div id="services">
      <div className="section-services ">
        <div className="services-titles">
          <h1 className="blur services-blur">SERVICES</h1>
          <h2 className="services-title">Services</h2>
        </div>
        <div className="grid-3 services-body container">
          <div className="services-content">
            <div className="services-icon">
              <img src={star} alt="" />
            </div>
            <h3 className="servises-sub">Car sales</h3>
            <p className="services-description">
              Car sales At YourCar, we offer a wide selection of luxury vehicles
              for sale. Whether you're in the market for a sleek sports car or a
              spacious SUV, we have the perfect vehicle to fit your needs.
            </p>
          </div>
          <div className="services-content">
            <div className="services-icon">
              {" "}
              <img src={diamond} alt="" />{" "}
            </div>

            <h3 className="servises-sub">Car rental</h3>
            <p className="services-description">
              If you're in need of a luxury car rental, look no further than
              YourCar. Our fleet of high-end vehicles is regularly maintained
              and serviced to ensure that you have a safe and comfortable
              driving experience.
            </p>
          </div>
          <div className="services-content">
            <div className="services-icon">
              {" "}
              <img src={rental} alt="" />
            </div>
            <h3 className="servises-sub">Car selling</h3>
            <p className="services-description">
              At YourCar, we make it easy to sell your car. Simply bring your
              vehicle in for an appraisal, and we'll handle the rest. We offer
              fair prices and a hassle-free selling process, so you can get your
              vehicle with minimal effort.
            </p>
          </div>
          <div>
            <diamond />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
