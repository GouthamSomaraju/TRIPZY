import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
// import adventure from "./Assets/adventure.webp";
import video from "./Assets/1.mp4";

// Features
import beach from "./Assets/images/features/beach-umbrella.png";
import deal from "./Assets/images/features/deal.png";
import Location from "./Assets/images/icons/location.png";
import medal from "./Assets/images/features/medal.png";

// Featured Destinations
import Taj from "./Assets/images/cards/Taj.avif";
import Havelock from "./Assets/images/cards/Havelock.jpg";
import Barcelona from "./Assets/images/cards/Barcelona.jpeg";
import Rome from "./Assets/images/cards/rome.jpeg";
import bali from "./Assets/images/cards/bali-8838762_1280.jpg";
import paris from "./Assets/images/cards/paris.jpg";
import swiss from "./Assets/images/cards/swiss.jpg";
import Kyoto from "./Assets/images/cards/Kyoto.jpeg";

// Icons
import locationIcon from "./Assets/images/icons/location.png";
import star from "./Assets/images/icons/star.png";

const destinations = [
  {
    title: "Taj Mahatlal, India",
    image: Taj,
    rating: 5.0,
    location: "Agra, India",
    type: "Adventure Tours",
  },
  {
    title: "Havelock Island",
    image: Havelock,
    rating: 4.5,
    location: "Andaman, India",
    type: "Adventure Tours",
  },
  {
    title: "Barcelona, Indonesia",
    image: Barcelona,
    rating: 4.7,
    location: "Spain",
    type: "Adventure Tours",
  },
  {
    title: "Rome",
    image: Rome,
    location: "Italy",
    type: "Adventure Tours",
  },
  {
    title: "Bali",
    image: bali,
    rating: 4.6,
    location: "Indonesia",
    type: "Adventure Tours",
  },
  {
    title: "Paris",
    image: paris,
    rating: 4.9,
    location: "France",
    type: "Cultural Tours",
  },
  {
    title: "Swiss Alps",
    image: swiss,
    rating: 4.7,
    location: "Switzerland",
    type: "Adventure Tours",
  },
  {
    title: "Kyoto",
    image: Kyoto,
    rating: 4.5,
    location: "Japan",
    type: "Cultural Tours",
  },
];

let features = [
  {
    id: 1,
    title: "Discover the possibilities",
    image: beach,
    content:
      "Write nearly half a million attractions, hotels & more, you're sure to find joy.",
  },
  {
    id: 2,
    title: "Enjoy deals & delights",
    image: deal,
    content:
      "Quality activities. Great prices. Plus, earn Credits, coupons to save more.",
  },
  {
    id: 3,
    title: "Exploring made easiest",
    image: Location,
    content:
      "Book last minute, skip lines & amp; get free cancellation for easier exploring",
  },
  {
    id: 4,
    title: "Travel you can trust",
    image: medal,
    content:
      "Read reviews & get reliable customer support. We're with you at every step.",
  },
];

function TravelHomePage() {
  return (
    <Container className="my-5">
      {/* Hero Section */}
      {/* <div
        className="bg-dark text-white text-center rounded p-5 mb-4"
        style={{
          backgroundImage: `url(${adventure})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        
        <h1 className="display-4 fw-bold">Explore the World with Us</h1>
      </div> */}
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
            Lets Go Trvel & Enjoy your Holiday
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
          <Col md={6} lg={3} key={dest.title} className="mb-4">
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
                  <img src={star} alt="Location"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginRight: "6px",
                    }}
                  />
                  {dest.rating}
                </Card.Text>
                <Card.Text>{dest.type}</Card.Text>
                <Button variant="primary" className="w-100">
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TravelHomePage;
