import React, { useState } from "react";
import "./buyer_dashboard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";

function BuyerDashboard() {
  Navbar();
  var c = 0;
  // var d = 1;
  // var e = 1;
  // fetching products
  const [product, setproduct] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("user/products")
      .then((response) => {
        setproduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //fetching user
  const baseURL = "/home";
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

  // console.log(post);

  //add to cart

  const addToCart = async (pid) => {
    console.log(`product ${pid}`);
    // e.preventDefault();
    try {
      const url = "/user/add-to-cart";
      const res = await axios.post(url, { id: pid }).then((response) => {
        console.log(response);
        alert("Product added to cart\nGo to your cart to Buy Product");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const searchProduct = async(pname) => {
    try{
      const url = "/api/products/search/:name";
      const res = await axios.get(url, {name: pname}).then((response) => {
        console.log(response);
        alert("Searching results");
      });
    }catch(error){
      console.log(error);
    }
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
                    <span className="ps-3">All items</span>
                  </span>
                  <span className="fas fa-chevron-down"></span>
                </a>
              </p>
              <div className="collapse show border" id="collapse_icon">
                <ul className="list-unstyled">
                  <li>
                    <a className="dropdown-item" href="# ">
                      Textile, Clothing & footwear
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Home Decor & Garden
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Baskets
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Clay models
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Handmade artifacts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Foods & Beverages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Festive items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Sugar confectionery, bakery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Spices
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Jute products
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Flowers & plants
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Agricultural raw materials
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Household appliances, articles <br /> & equipment
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Books, newspapers, magazines <br /> & stationery
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Games and toys{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Watches & clocks
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Accessories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Chemical & pharmaceutical
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Handmade Artifacts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Medical Health
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Acupuncture/Acupressure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Beauty and Cosmetics
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Children & Infants
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Pets Supplies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="# ">
                      Style & Fashion
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

            <div className="col-lg-9">
              <div className="d-lg-flex align-items-center gap-2">
                <div className="d-lg-flex align-items-center border pe-2">
                  <div className="dropdown w-100 my-lg-0 my-2">
                    <button
                      className="btn d-flex justify-content-between align-items-center"
                      type="button"
                      id="dropdownMenu"
                      data-bs-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <span className=" w-100 d-flex align-items-center">
                        <span className="fw-lighter pe-3">Categories</span>
                        <span className="fas fa-chevron-down ms-auto"></span>
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu sec-bar"
                      aria-labelledby="dropdownMenu"
                    >
                      <li>
                        <a className="dropdown-item" href="# ">
                          Home Decor
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="# ">
                          Artifacts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="# ">
                          Local Food
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="# ">
                          Jute products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center w-100 h-100 ps-lg-0 ps-sm-3 sec-bar">
                    <input
                      className=" ps-md-3 ps-3"
                      type="text"
                      placeholder="what do you need?"
                    />
                    <div className="btn btn-primary d-flex align-items-center justify-content-center" onClick={()=>searchProduct()}>
                      {" "}
                      SEARCH
                    </div>
                  </div>
                  {/* <div>
                                            <a href="shopping_cart.html">
                                                <button btn-lg><i className="fa-solid fa-cart-shopping"></i></button>
                                            </a>
                                        </div> */}
                </div>

                {id === "3" || status === "active" ? (
                  <div className="marquee">
                    <Link to="/suggestproduct">
                      <marquee style={{ color: "#40514e" }}>
                        Suggest a product, click here!
                      </marquee>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}

                <div className="cart-logo" style={{ width: "100px" }}>
                  <Link to="/cart">
                    <img
                      className="logo logo_light_bg"
                      alt="cart logo"
                    />
                  </Link>
                </div>
              </div>

              <div className=" d-lg-flex flex-lg-row d-flex flex-column-reverse bg-light mt-5 productswidth">
                {/* <div className="row product_row">
                  <div className="col"> */}
                {/* <div className="products_container item_grid"> */}
                <div className="row rowflex">
                  {product.map((p, idx) => (
                    // <div
                    //   className="product-column width col-lg-3 col-md-6"
                    //   key={idx}
                    //
                    <div
                      className="card"
                      key={idx}
                      // style={{
                      //   color: "orange",
                      //   "overflow-wrap": "normal",
                      // }}
                    >
                      <Link to="/product">
                        {/* <img
                          src={
                              c>=16
                              ? require("https://www.ynotpics.com/wp-content/uploads/2017/06/lavender-flower.jpg")
                              : p.product_images[0]
                          }
                      
                          
                          className="card-img-top product-image"
                          alt="soap"
                        /> */}

                        {c>=16?(
                         <img
                          src=
                              "https://www.ynotpics.com/wp-content/uploads/2017/06/lavender-flower.jpg"
                          
                          className="card-img-top product-image"
                          alt="soap"
                        /> 
                        ):(
                          <img
                        /*   src={
                               p.product_images[0]
                          } */
                          className="card-img-top product-image"
                          alt="soap"
                        /> 
                        )}


                        {/* <img
                          src={
                            d == 17
                              ? p.product_images[0]
                              : "https://www.ynotpics.com/wp-content/uploads/2017/06/lavender-flower.jpg"
                          }
                          className="card-img-top product-image"
                          alt="soap"
                        /> */}

                        {/* <img
                          src={
                            c == 18
                              ? p.product_images[0]
                              : "https://www.ynotpics.com/wp-content/uploads/2017/06/lavender-flower.jpg"
                          }
                          className="card-img-top product-image"
                          alt="soap"
                        /> */}
                      </Link>
                      <div className="card-body d-flex flex-column gap-2 justify-content-start align-items-start">
                        <h5 className="card-title">{p.product_name}</h5>
                        <p
                          className="card-text text-truncate"
                          style={{ maxWidth: "200px" }}
                        >
                          {p.product_description}
                        </p>
                        <div className="d-flex gap-5 justify-content-center align-items-center">
                          <h6 className="card-price">Rs. {p.product_price}</h6>
                          <a
                            href="#"
                            className="btn btn-primary addtocart"
                            onClick={() => {
                              addToCart(p._id);
                            }}
                          >
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                    // </div>
                  ))}
                </div>

                {/* </div> */}
                {/* </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
 c++;
}

export default BuyerDashboard;
