// Categories.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import historic from './Assets/images/packages/historic.jpg'
import touristic from './Assets/images/packages/touristic.jpg'
import spiritual from './Assets/images/packages/spritual.jpg'


const categoryData = [
  {
    title: "Touristic",
    image: touristic,
    link: "/category/touristic",
  },
  {
    title: "Spiritual",
    image:spiritual,
    link: "/category/spiritual",
  },
  {
    title: "Historical",
    image: historic,
    link: "/category/historical",
  },
];

const Packages = () => {
  const navigate = useNavigate();

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Choose a Travel Category</h2>
        <Row>
          {categoryData.map((cat, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card
                className="h-100 shadow-sm cursor-pointer"
                onClick={() => navigate(cat.link)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={cat.image} style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body className="text-center">
                  <Card.Title>{cat.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// export default Categories;


export default Packages;
