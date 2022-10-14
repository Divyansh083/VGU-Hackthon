import React, { useState } from "react";
import "./best_practices.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Collapse } from "bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function BestPractices() {
  return (
    <>
      <div className="best_practices">
        <h1 className=" head text-center" style={{ fontSize: "2rem" }}>
          <b>Best Practices</b>
        </h1>

        <div className="row">
          <div className="soil_prep">
            <label for="check" className="togButton text-left">
              1.Soil Preparation
            </label>
            <div className="col col-md-10">
              <input type="checkbox" className="togCheck" id="check" />
              <div className="togContent">
                <p>
                  The most important aspect in agricultural process is to loosen
                  the topsoil. The loosened soil helps in the growth of
                  earthworm and soil microbes. These organisms add humus to the
                  soil and are friendly to farmers. Plants absorb water,
                  minerals, nutrients and air from the soil through their roots.
                  Hence it is essential to prepare the soil in a proper way
                  before starting the cultivation practice. The soil preparation
                  methods are given below..
                </p>
                <img
                  src="https://img.brainkart.com/imagebk44/rqpWEm7.jpg"
                  alt="" style={{width:"40%", height:"40%"}}
                  className="img"
                />{" "}
                <br />
                <span>
                  <br />
                  <b>a. Ploughing</b>
                </span>
                <br />
                <span>
                  The following are the few important agricultural implements
                  generally used in the field preparation.
                </span>
                <br />
                <img
                  src="https://img.brainkart.com/imagebk44/tuoFjjY.jpg"
                  alt="" style={{width:"50%", height:"50%"}}
                />
                <br />
                <br />
                Ploughing or tilling is the process of loosening and turning the
                soil up and down to facilitate the availability of nutrients in
                the root zone of the cultivating crop. The following are the few
                important agricultural implements generally used in the field
                preparation.<br></br>
                <br />{" "}
                <span>
                  <b style={{ fontSize: "1rem" }}>Plough</b>
                </span>
                <br />
                <div>
                  Plough is mainly used for tilling the soil, to add fertilisers
                  to the crop, remove weeds and other waste materials from the
                  field and also to turn the soil. A plough is made of wood and
                  is drawn by a pair of bulls or horses. It contains a strong
                  and a sharp triangular iron strip known as ploughshare. The
                  main part of the plough is a long log of wood which is called
                  plough shaft. The other end is attached to a beam which is
                  placed on the bull’s neck.
                </div>
                <br />{" "}
                <span>
                  <b style={{ fontSize: "1rem" }}>Hoe</b>
                </span>
                <div>
                  It is a simple tool which is used to till the land, remove
                  weeds and dig up soil. It has a long wooden rod with a bent
                  iron plate at one end. The other end may be attached to an
                  animal.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestPractices;
