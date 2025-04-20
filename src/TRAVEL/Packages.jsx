// Packages.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Packages.css"; // Add this line for custom styles

import historic from './Assets/images/packages/historical.jpg';
import touristic from './Assets/images/packages/touristic.jpg';
import spiritual from './Assets/images/packages/spritual.jpg';

const categoryData = [
  {
    title: "Touristic",
    image: touristic,
    link: "/touristic",
  },
  {
    title: "Spiritual",
    image: spiritual,
    link: "/spiritual",
  },
  {
    title: "Historical",
    image: historic,
    link: "/historical",
  },
];

const Packages = () => {
  const navigate = useNavigate();

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Choose a Travel Category</h2>
        <Row className="justify-content-center">
          {categoryData.map((cat, idx) => (
            <Col md={4} key={idx} className="mb-4 d-flex justify-content-center">
              <div className="image-card" onClick={() => navigate(cat.link)}>
                <img src={cat.image} alt={cat.title} className="category-image" />
                <div className="image-overlay">
                  <h4 className="overlay-text">{cat.title}</h4>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;
