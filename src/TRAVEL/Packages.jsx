import React from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import { destinations, time, locationIcon, star } from './data';

const Packages = () => {
  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Explore Our Travel Packages</h2>
        <Row>
          {destinations.map((dest) => (
            <Col md={6} lg={3} key={dest.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={dest.image} />
                <Card.Body>
                  <Card.Title>{dest.title}</Card.Title>
                  <Card.Text className="d-flex align-items-center mb-2 text-muted">
                    <img
                      src={locationIcon}
                      alt="Location"
                      style={{ width: "16px", height: "16px", marginRight: "6px" }}
                    />
                    {dest.location}
                  </Card.Text>
                  
                  <Card.Text className="d-flex align-items-center mb-2 text-muted">
                    <img
                      src={star}
                      alt="Rating"
                      style={{ width: "16px", height: "16px", marginRight: "6px" }}
                    />
                    {dest.rating}
                  </Card.Text>
                  <Card.Text className="text-muted mb-3">{dest.type}</Card.Text>
                  <hr />
                  <div className="d-flex justify-content-between text-muted">
                    <div><strong>From:</strong> {dest.price}</div>
                    <div className="d-flex align-items-center">
                      <img
                        src={time}
                        alt="time"
                        style={{ width: "16px", height: "16px", marginRight: "6px" }}
                      />
                      {dest.days}D-{dest.nights}N
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;
