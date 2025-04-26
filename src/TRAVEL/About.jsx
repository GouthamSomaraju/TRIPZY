import React, { useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

import van from "./Assets/images/about/van.jpg";
import destination from "./assets/images/about/destination.png";
import best from "./assets/images/about/best-price.png";
import quick from "./assets/images/about/quick.png";

import AOS from "aos";
import "aos/dist/aos.css";

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
   useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <>
      {/* Image Section with same width as cards */}
      <Container className="my-5">
        <div className="position-relative w-100">
          <img
            src={van}
            alt="Travel"
            className="img-fluid w-100 rounded"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="position-absolute top-50 start-50 translate-middle bg-dark bg-opacity-50 text-white p-3 rounded">
            <h2 className="fs-3 fw-bold m-0">HOW WE ARE BEST FOR</h2>
          </div>
        </div>
      </Container>

      {/* Content Section with same width */}
      <Container className="pb-4">
        <div className="text-start">
          <h1 className="fw-bold mb-4 fs-1">About Us</h1>
          <p className="mb-3 p-1 fs-5 fw-semibold">
            Welcome to our travel website! We are passionate about helping you explore the world and create unforgettable memories. Our team of travel experts is dedicated to providing you with the best travel experiences.
          </p>
          <p className="mb-5 p-1 fs-5 fw-semibold">
            Whether you're looking for adventure, relaxation, or cultural immersion, we have something for everyone.
          </p>
        </div>
      </Container>

      {/* Cards Section */}
      <Container className="my-5">
        <Row className="justify-content-center">
          {about.map((item,index) => (
            <Col xs={12} md={6} lg={4} key={item.id} className="mb-4" data-aos={index % 2 === 0 ? "flip-left" : "flip-right"}>
              {/* Card for each item */}
              <Card className="text-center shadow-sm h-100">
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
                  <Card.Text className="p-3 fw-semibold">{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default About;
