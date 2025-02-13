import React from "react";
import "./Services.css";  
const Services = () => {
  return (
    <div className="container">
      {/* Banner Section */}
      <section className="banner">
        <img
          src="/img/services.jpg"
          alt="SERVICES"
          className="bannerImage"
        />
        <p className="bannerText">
          Discover our comprehensive range of interior design services tailored to meet your needs.
        </p>
      </section>
      <hr className="hr" />
      <div className="servicesList">
        <ul>
          <li className="serviceItem">
            <h2 className="subHeader">Residential Design</h2>
            <p className="paragraph">
              Create a home that reflects your style and personality with our
              residential design services. From concept to completion, we ensure
              every detail enhances your living space.
            </p>
          </li>
          <li className="serviceItem">
            <h2 className="subHeader">Commercial Design</h2>
            <p className="paragraph">
              Transform your office or commercial space into an inspiring
              environment that boosts productivity and reflects your brand. Our
              commercial design solutions are tailored to meet your business
              objectives.
            </p>
          </li>
          <li className="serviceItem">
            <h2 className="subHeader">Renovations</h2>
            <p className="paragraph">
              Revitalize your existing space with our renovation services. Whether
              you're updating a single room or undergoing a complete home makeover,
              we provide expert guidance and quality craftsmanship.
            </p>
          </li>
          <li className="serviceItem">
            <h2 className="subHeader">Space Planning</h2>
            <p className="paragraph">
              Optimize your space with our space planning services. We create
              functional layouts that maximize usability and flow, ensuring every
              square foot serves its purpose efficiently.
            </p>
          </li>
          <li className="serviceItem">
            <h2 className="subHeader">Furniture Selection</h2>
            <p className="paragraph">
              Choose the perfect furniture pieces that complement your design
              aesthetic and lifestyle. Our furniture selection service includes
              sourcing, customization, and placement to enhance your space.
            </p>
          </li>
          <li className="serviceItem">
            <h2 className="subHeader">Color Consultation</h2>
            <p className="paragraph">
              Transform your space with the power of color. Our color consultation
              service helps you select the right hues to create ambiance, highlight
              architectural features, and evoke the desired mood.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
