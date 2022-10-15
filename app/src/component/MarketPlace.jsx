import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Footer from "./Footer";

import "../buyer_dashboard.css";

function MarketPlace() {
  return (
    <>
      <div class="col-md-12">
        <br />
        <br />
        <br />
        <h1 style={{ size: 50 }}>
          <b>Market Place</b>
        </h1>
        <br />
        <Row xs={9} md={4} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://tse3.mm.bing.net/th?id=OIP.0kP26hf4S6sKq-7-ci-1owHaKL&pid=Api&P=0"
                />
                <Card.Body>
                  <Card.Title>Mahadhan</Card.Title>
                  <Card.Text>
                    Mahadhan – one of the most trusted fertiliser brands in
                    India brings to you a wide variety of fertilisers. Our micro
                    nutrients, secondary nutrients, water soluble fertilisers,
                    bulk fertilisers and speciality fertilisers have not only
                    stood the test of time, but have emerged as the most
                    successful and the most trusted fertilisers.
                  </Card.Text>{" "}
                  <br />
                  <Card.Text>
                    Rs.100
                  </Card.Text>{" "}
                  <a
                    href="https://razorpay.me/@ayru?amount=ZFm4ghdmeB6pF5PK8Ki64w%3D%3D"
                    target="_blank"
                  >
                    <Button> Buy Now </Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <br />
        <br />
        <br />
        <Row xs={9} md={4} className="g-4">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src="https://tse2.mm.bing.net/th?id=OIP.umYnHzJfaFLXHh_pYzbYOgAAAA&pid=Api&P=0"
                />
                <Card.Body>
                  <Card.Title>Multiplex Ferrous EDTA</Card.Title>
                  <Card.Text>
                    MULTIPLEX FERROUS EDTA contains iron metal which is chelated
                    with EDTA (Ethylene Diamine Tetra Acetic Acid) and chelation
                    is 100% guranteed, can be used as fertilizer to overcome
                    Iron deficiency symptoms in plants which require from for
                    their normal growth and high quality yields. It can be used
                    as Soil Application or Foliar Spray.
                  </Card.Text>{" "} 
                  <br />
                  <Card.Text>
                    Rs.100
                  </Card.Text>{" "}
                 
                  <a
                    href="https://razorpay.me/@ayru?amount=ZFm4ghdmeB6pF5PK8Ki64w%3D%3D"
                    target="_blank"
                  >
                    <Button>Buy Now</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
}
export default MarketPlace;
