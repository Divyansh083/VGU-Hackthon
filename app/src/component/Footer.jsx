import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>AGRO HELP INC</h4>
            <ui className="list-unstyled">
              <li>+91-999999999</li>
              <li>RAJASTHAN, INDIA</li>
              <li>123 Shri Vijay Marg</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Email Us</h4>
            <ui className="list-unstyled">
              <li>yourcompany@gmail.com</li>
              <li>Or email us directly-</li>
              <li><Link to="./Contact">Contact Us</Link></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>CONNECT WITH US</h4>
            <ui className="list-unstyled">
              <li>Instagram: agro_help</li>
              <li>facebook: some link</li>
              <li>LinkedIn: some link</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} AGRO HELP COMMUNITY | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;