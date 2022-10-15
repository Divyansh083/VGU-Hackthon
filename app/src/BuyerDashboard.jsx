import React, { useState } from "react";
import "./buyer_dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./component/Navbar";

import Footer from "./component/Footer";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

function BuyerDashboard() {
  //fetching user
  const baseURL = "/";
  let id = 99;
  let status;
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (post != null) {
    id = post.usertype;
    status = post.user_status;
  }

  return (
    <>
      <div className="buyer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 mb-lg-0 mb-2">
              <p>
                <a
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-between"
                  data-bs-toggle="collapse"
                  href="#collapse_icon"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapse_icon"
                >
                  <span className="fas fa-bars">
                    <span className="ps-3">Seasons</span>
                  </span>
                  <span className="fas fa-chevron-down"></span>
                </a>
              </p>
              <div className="collapse show border" id="collapse_icon">
                <ul className="list-unstyled">
                  <li>
                    <a className="dropdown-item" href="# ">
                      Summer
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Winter
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Rainy
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Spring
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Autumn
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Other
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-8">
              <h1>
                <b>Details about agricultural activities</b>
              </h1>
              <br />
              <Row xs={1} lg={4} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Col>
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://tse3.mm.bing.net/th?id=OIP.1toJuITfsbeT5rNNZhRFGwHaFP&pid=Api&P=0"
                      />
                      <Card.Body>
                        <Card.Title>Date Palm</Card.Title>
                        <Card.Text>
                          A date fruit is the product of a date palm, a tree
                          native to Northern Africa and the Middle East,
                          although it is also cultivated in other parts of the
                          world. In addition to being eaten fresh, the date
                          fruit is dried and eaten whole as a snack or included
                          in an assortment of desserts.
                        </Card.Text>{" "}
                        <br />
                        <a href="Details" target="_blank">
                          <Button> Show More </Button>
                        </a>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BuyerDashboard;
