import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Collapsible from "react-collapsible";
import Footer from "./Footer";

const CompanyPage = () => {
  return (
    <>
      <div class="col-lg-6 info collapsible">
        <Collapsible trigger="Start here">
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>

        <Collapsible trigger="Start here">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem minus fuga at eos dolorem ipsum laborum error
            corporis quisquam vel, adipisci perferendis facere enim quasi,
            pariatur assumenda? Laboriosam, dolorem totam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            illo tempore in saepe, ipsa modi. Eos voluptates id optio omnis
            laboriosam veniam placeat impedit aut magni atque fugit, at odit.
          </p>
        </Collapsible>
      </div>
      <Footer />
    </>
  );
};

export default CompanyPage;
