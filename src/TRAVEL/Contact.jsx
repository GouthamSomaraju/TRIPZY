import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const destinations = [
  {
    title: "Bali, Indonesia",
    image: "https://source.unsplash.com/featured/?bali",
    type: "Adventure Tours"
  },
  {
    title: "Paris, France",
    image: "https://source.unsplash.com/featured/?paris",
    type: "Cultural Tours"
  },
  {
    title: "Swiss Alps, Switzerland",
    image: "https://source.unsplash.com/featured/?switzerland",
    type: "Adventure Tours"
  },
  {
    title: "Kyoto, Japan",
    image: "https://source.unsplash.com/featured/?kyoto",
    type: "Cultural Tours"
  }
];

function TravelHomePage() {
  return (
    <Container className="my-5">
      {/* Hero Section */}
      <div
        className="bg-dark text-white text-center rounded p-5 mb-4"
        style={{
          backgroundImage: "url('https://source.unsplash.com/featured/?travel')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="display-4 fw-bold">Explore the World with Us</h1>
      </div>

      {/* Tour Types Section */}
      <h2 className="mb-4">Types of Tours</h2>
      <Row className="mb-5">
        {["Adventure Tours", "Cultural Tours"].map((type) => (
          <Col md={6} key={type} className="mb-3">
            <Card>
              <Card.Body className="text-center">
                <Card.Title>{type}</Card.Title>
                <Card.Text>
                  Explore the best {type.toLowerCase()} around the world.
                </Card.Text>
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
                <Card.Text>{dest.type}</Card.Text>
                <Button variant="primary" className="w-100">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TravelHomePage;