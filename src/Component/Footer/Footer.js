import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./Footer.css"; 
const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row text-center text-xs-center text-sm-left text-md-left">
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>About Us</h5>
            <ul className="list-unstyled quick-links">
              <p>
                We are a leading interior design company dedicated to creating
                beautiful and functional spaces. With years of experience, our
                team of expert designers transforms your vision into reality.
              </p>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>Newsletter</h5>
            <p>
              Subscribe to our newsletter to stay updated on the latest trends and
              offers.
            </p>
            <a href="#">Subscribe Now</a>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-4">
            <h5>About Us</h5>
            <ul className="list-unstyled quick-links">
              <p>
                We are a leading interior design company dedicated to creating
                beautiful and functional spaces. With years of experience, our
                team of expert designers transforms your vision into reality.
              </p>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
            <ul className="list-unstyled list-inline social text-center">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p>
              <u>
                <a href="https://www.qubinetsinteriors.com/">
                  Qubinets Interiors
                </a>
              </u>{" "}
              is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned
              subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p>
            <p className="h6">
              &copy; All right Reserved.
              <a
                className="text-green ml-2"
                href="https://www.qubinetsinteriors.com"
                target="_blank"
              >
                Qubinets Interiors
              </a>
            </p>
          </div>
          <hr />
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Qubitnets Technology. All rights reserved.</p>
      </div>
      <div className="footer-bottom-left">
          <a href="#">Terms & Conditions</a> | <a href="#"> Privacy Policy</a>
        </div>
    </section>
  );
};

export default Footer;
















