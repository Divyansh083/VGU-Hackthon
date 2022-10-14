import React from "react";
import "./pest.css"
import "bootstrap/dist/css/bootstrap.min.css";

const PestPage=()=>{
    return(
        <div>
            <h1 style={{textAlign:"center"}}>
        <p>Pest Control</p>
    </h1>
    <div class="container-fluid">
      <div class="row content">
          <div class="col-lg-6">
            <h3 style={{textAlign:"center"}}>Advices on taking care of pests</h3>
            
              <h4>Termites</h4>
              <h5>Symptoms:-</h5>
              <p>
              These pest attacks on the roots at the plants. For termite control apply chlorpyrifos through drip irrigation
              </p>
              <br />
              <h5>Management</h5>
              <p>
              To control termites, mix 800 ml chlorpyrifos in 150 Ltr of water and apply in roots of the plants.
              </p>

            
          </div>
          <div class="col-lg-6">
              <img src="https://images.pexels.com/photos/12895278/pexels-photo-12895278.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
      </div>
      </div>
        </div>
    )
}

export default PestPage;