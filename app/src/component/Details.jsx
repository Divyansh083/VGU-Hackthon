import React, { useState } from "react";
import useCollapse from "react-collapsed";
import "./details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Accordion } from "react-bootstrap";

function Details() {
  return (
    <div className="Details">
      <Container className="p-4">
        <div>
          <h1 style={{ fontSize: 40 }}>
            <b>Details</b>
          </h1>
        </div>
        <br />
        <h2>1. Date Palm</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Introduction</Accordion.Header>
            <Accordion.Body>
              Date palm is oldest tree cultivation on earth.They are excellent
              source of calcium, sugar, iron and potassium. They are used in
              many social and religious festivals. Also they have many health
              benefits like relive constipation, reduce heart disease, control
              diarrhea and help in pregnancy. <br />
              Date cultivation is mainly concentrated in Arabic countries,
              Irasel and Africa. Iran is major producer and exporter of dates.
              From last decades Indian Government take lot of effort and
              increased area under date plam cultivation.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Climate</Accordion.Header>
            <Accordion.Body>
              Date requires low relative humidity and plenty of sunshine for
              their best growth. <br />
              It requires long days with plenty of sunshine, night temperatures
              and winter days without frost. It does not prefer rain especially
              at the time of flowering and fruit setting.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Soil</Accordion.Header>
            <Accordion.Body>
              Dates require welldrained deep sandy loam soils with pH of 8.0 to
              10.0. The soil should have ability to hold the moisture. <br />{" "}
              The dates also can be grown in saline and alkaline soils with
              lower yield. <br /> The soil should be free from calcium carbonate
              and should not have any hard pan at least up to 2.5 meter for
              better root development.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Irrigation</Accordion.Header>
            <Accordion.Body>
              In summers, irrigation is given at the interval of 10-15 days and
              in winters irrigation is given at the interval of 30-40 days.{" "}
              <br /> Prior irrigation is necessary after spathe emergence. After
              fruit set irrigation is given at regular intervals
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Pre-harvesting</Accordion.Header>
            <Accordion.Body>
              For first harvesting, 4 to 5 years are required. In between
              vegetables like gaur, gum, rise, chilly, peas, brinjal etc. can be
              taken as intercrop.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Harvesting</Accordion.Header>
            <Accordion.Body>
              Four to five year after plantation, date palm tree are ready for
              first harvest. Fruits are harvested at three stages, khalal or
              doka stage(fresh fruits), soft or ripen stage (pind or tamar) and
              dry stage (chuhhara). Complete harvesting before start of monsoon
              season.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Weed Control</Accordion.Header>
            <Accordion.Body>
              Keep field clean and free from weeds. Take weeding or hoeing
              operations depending upon intensity of weeds. Use mulch for weed
              control.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="7">
            <Accordion.Header>Best time to buy</Accordion.Header>
            <Accordion.Body>
            Based on the available data, it seems that the date harvest time in Iran started in late July and will continue until the end of December. Based on this, you may be able to buy fresh Iranian dates in two seasons, summer and autumn, from reputable sellers of fresh dates around the world.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <div>
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.1toJuITfsbeT5rNNZhRFGwHaFP&pid=Api&P=0"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
}

export default Details;
