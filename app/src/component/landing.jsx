import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import pic1 from ".about_img.jpg"

const LandingPage = () => {
  return (
    <>
      <section class="banner_main" style={{paddingTop:"20px"}}>
        <div class="container-fluid">
          <div class="row d_flex ">
            <div class="col-xl-4 col-lg-4 col-md-12">
              <div class="banner_main_text">
                <div class="titlepage">
                  <h2 style={{ fontSize: "30px" }}>Our Moto</h2>
                  <p style={{fontFamily:"Copperplate" ,fontSize:"25px"}}>
                    The portal provides large companies with all the information
                    about the crops including sowing techniques and all the
                    activities from pre harvesting to harvesting. <br />
                    It provides famrers with weather alerts and guides them with
                    the suitable crop ,best practices and pest control
                    techniques.
                  </p>
                  <Link to="#" style={{fontSize:"20px"}}>Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-12 padding_right">
              <div class="banner_main_img">
                <figure>
                  <img src="images/our_img1.jpg" alt="#" />
                  <h3>FARMING COMPANY</h3>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="about" class="about">
        <div class="container-fluid">
          <div class="row d_flex">
            <div class="col-xl-7 col-lg-7 col-md-12 padding_lert">
              <div class="about_img">
                <figure>
                  <img src="images/about_img.jpg" alt="#" />
                </figure>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12">
              <div class="about_text">
                <div class="titlepage">
                  <h2 style={{ fontSize: "30px" }}>
                    Pradhan Mantri Krishi Sinchai Yojana
                  </h2>
                  <p style={{fontFamily:"Copperplate" ,fontSize:"25px"}}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and{" "}
                  </p>
                  <Link to="#" style={{fontSize:"20px"}}>Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="our" class="our">
        <div class="container-fluid">
          <div class="row d_flex">
            <div class="col-xl-5 col-lg-5 col-md-12 order_2">
              <div class="our_text">
                <div class="titlepage">
                  <h2 style={{ fontSize: "30px" }}>Our Fields</h2>
                  <p style={{fontFamily:"Copperplate" ,fontSize:"25px"}}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and{" "}
                  </p>
                  <Link to="#" style={{fontSize:"20px"}}>Read More</Link>
                </div>
              </div>
            </div>
            <div class="col-xl-7 col-lg-7 col-md-12 padding_right order_1">
              <div class="our_img">
                <figure>
                  <img src="images/our_img.jpg" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div class="footer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="cont">
                  <h3 style={{ fontSize: 30 }}>Let’s talk Business</h3>
                  <p style={{fontFamily:"Copperplate" ,fontSize:"25px"}}>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. <br />
                    The point of using Lorem Ipsum is able English. Many desktop
                    publishing packages and
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    Copyright 2019 All Right Reserved By{" "}
                    <a href="https://html.design/"> Free html Templates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
