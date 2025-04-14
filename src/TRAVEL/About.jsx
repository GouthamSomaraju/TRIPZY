import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import destination from "./assets/images/about/destination.png";
import best from "./assets/images/about/best-price.png";
import quick from "./assets/images/about/quick.png";

const about = [
  {
    id: 1,
    title: "50+ Destinations",
    description: "Explore a wide range of travel destinations around the world.",
    image: destination,
  },
  {
    id: 2,
    title: "Best Price In The Industry",
    description: "We offer competitive prices for all our travel packages.",
    image: best,
  },
  {
    id: 3,
    title: "Super Fast Booking",
    description: "Experience quick and easy booking process with us.",
    image: quick,
  },
];

const About = () => {
  return (
    <Container className="my-5">
     <Row className="align-items-center my-5">
  {/* Left: Image + Content (8/12 width) */}
  <Col xs={12} lg={8} className="mb-4 mb-lg-0">
    <div className="position-relative">
      <img
        src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRyYXZlbHxlbnwwfHx8fDE2OTI3MjY5NzA&ixlib=rb-4.0.3&q=80&w=1080"
        alt="Travel"
        className="img-fluid rounded"
        style={{ height: "400px", objectFit: "cover", width: "100%" }}
      />
      <div className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white p-3 rounded">
        <h2 className="fs-3 fw-bold">HOW WE ARE BEST FOR</h2>
      </div>
    </div>
    <div className="mt-4">
      <h1 className="text-4xl fw-bold">About Us</h1>
      <p className="mt-3">
        Welcome to our travel website! We are passionate about helping you explore the world and create unforgettable memories. Our team of travel experts is dedicated to providing you with the best travel experiences.
      </p>
      <p className="mt-2">
        Whether you're looking for adventure, relaxation, or cultural immersion, we have something for everyone.
      </p>
    </div>
  </Col>

  {/* Right: Cards (4/12 width) */}
  <Col xs={12} lg={4}>
    <Row>
      {about.map((item) => (
        <Col xs={12} key={item.id} className="mb-4">
          <Card className="text-center shadow-sm">
            <Card.Img
              variant="top"
              src={item.image}
              className="p-3"
              style={{
                height: "80px",
                width: "80px",
                objectFit: "contain",
                margin: "0 auto",
              }}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Col>
</Row>

    </Container>
  );
};

export default About;
