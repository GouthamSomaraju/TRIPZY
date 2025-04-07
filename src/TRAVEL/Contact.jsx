import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import adventure from "./Assets/adventure.webp";
import video from "./Assets/1.mp4";

import { destinations, features, locationIcon, star, time } from "./data";

function TravelHomePage() {
  return (
    <Container className="my-5">
      {/* Hero Section */}
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
          {/* <h1 className="display-4 fw-bold">Explore the World with Us</h1> */}
          <h1 className="display-4 fw-bold">
            Lets Go Travel & Enjoy your Holiday
          </h1>
        </div>
      </div>

      {/* Tour Types Section */}
      <h2 className="mb-4 text-center">Features</h2>
      <Row className="mb-5">
        {features.map((feature) => (
          <Col md={6} lg={3} key={feature.id} className="mb-4">
            <Card className="text-center">
              <Card.Img
                variant="top"
                src={feature.image}
                className="p-3"
                style={{ height: "100px", width: "100px", margin: "0 auto" }}
              />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.content}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Featured Destinations */}
      <h2 className="mb-4">Featured Destinations</h2>
      <Row>
        {destinations.map((dest) => (
          <Col md={6} lg={3} key={dest.id} className="mb-4">
            <Card>
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
                    alt="Location"
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
                  <div>From: {dest.price}</div>
                  <div>
                    <img
                      src={time}
                      alt="time"
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
    </Container>
  );
}

export default TravelHomePage;
