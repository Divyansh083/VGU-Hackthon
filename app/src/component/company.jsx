import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const CompanyPage = () => {
  return (
    <div class="row">
      {/* <div class="col-lg-6 img-fluid">
        <img
          source={require("https://images.pexels.com/photos/3993529/pexels-photo-3993529.jpeg?auto=compress&cs=tinysrgb&w=600")}
        ></img>
      </div> */}
      <div class="col-lg-6 info">
        <button type="button" class="collapsible">
          Open Collapsible
        </button>
        <div class="content">
          <p>Lorem ipsum...</p>
        </div>

        <button type="button" class="collapsible">
          Open Collapsible
        </button>
        <div class="content">
          <p>Lorem ipsum...</p>
        </div>

        <button type="button" class="collapsible">
          Open Collapsible
        </button>
        <div class="content">
          <p>Lorem ipsum...</p>
        </div>

        <button type="button" class="collapsible">
          Open Collapsible
        </button>
        <div class="content">
          <p>Lorem ipsum...</p>
        </div>

        <button type="button" class="collapsible">
          Open Collapsible
        </button>
        <div class="content">
          <p>Lorem ipsum...</p>
        </div>

        <button type="button" class="collapsible">
          Open Collapsible
        </button>
        <div class="content">
          <p>Lorem ipsum...</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
