import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import video from "./Assets/1.mp4";

import { destinations, features, locationIcon, star, time } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container fluid className="px-3 my-5" style={{ overflowX: "hidden" }}>
      {/* Hero Section */}
<div style={{ paddingLeft: "7%", paddingRight: "7%" }}>
  <div
    className="position-relative overflow-hidden rounded mb-4"
    style={{ height: "400px" }}
  >
    {/* Background Video */}
    <video
      className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      autoPlay
      loop
      muted
    >
      <source src={video} type="video/mp4" />
    </video>

    {/* Overlay Text */}
    <div
      className="position-relative text-white text-center d-flex justify-content-center align-items-center h-100 w-100"
      style={{ zIndex: 1, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
    >
      <h1 className="display-4 fw-bold">
        Let's Go Travel & Enjoy your Holiday
      </h1>
    </div>
  </div>
</div>


      {/* Features Section */}
<div style={{ paddingLeft: "7%", paddingRight: "7%" }}>
  <h2 className="mb-4 text-center">Features</h2>
  <Row className="mb-5">
    {features.map((feature, index) => (
      <Col
        md={6}
        lg={3}
        key={feature.id}
        className="mb-4"
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      >
        <Card className="text-center h-100 shadow-sm">
          <Card.Img
            variant="top"
            src={feature.image}
            className="p-3"
            style={{
              height: "100px",
              width: "100px",
              objectFit: "contain",
              margin: "0 auto",
            }}
          />
          <Card.Body>
            <Card.Title>{feature.title}</Card.Title>
            <Card.Text>{feature.content}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</div>

{/* Featured Destinations Section */}
<div style={{ paddingLeft: "7%", paddingRight: "7%" }}>
  <h2 className="mb-4 text-center">Featured Destinations</h2>
  <Row>
    {destinations.map((dest, index) => (
      <Col
        md={6}
        lg={3}
        key={dest.id}
        className="mb-4"
        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
      >
        <Card className="h-100 shadow-sm">
          <Card.Img variant="top" src={dest.image} />
          <Card.Body>
            <Card.Title>{dest.title}</Card.Title>

            <Card.Text className="d-flex align-items-center">
              <img
                src={locationIcon}
                alt="Location"
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "6px",
                }}
              />
              {dest.location}
            </Card.Text>

            <Card.Text className="d-flex align-items-center">
              <img
                src={star}
                alt="Rating"
                style={{
                  width: "16px",
                  height: "16px",
                  marginRight: "6px",
                }}
              />
              {dest.rating}
            </Card.Text>

            <Card.Text>{dest.type}</Card.Text>

            <hr />

            <div className="d-flex justify-content-between mt-2">
              <div>From: ₹{dest.price}</div>
              <div>
                <img
                  src={time}
                  alt="Time"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "6px",
                  }}
                />
                {dest.days} Days - {dest.nights} Nights
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</div>

      
    </Container>
  );
};

export default Home;
