// Packages.js
import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Packages.css"; // Add this line for custom styles

import historic from './Assets/images/packages/historical.jpg';
import touristic from './Assets/images/packages/touristic.jpg';
import spiritual from './Assets/images/packages/spritual.jpg';

 import AOS from "aos";
  import "aos/dist/aos.css";
    
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
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Choose a Travel Category</h2>
        <Row className="justify-content-center">
          {categoryData.map((cat, idx) => (
            <Col md={4} key={idx} className="mb-4 d-flex justify-content-center"
    //         data-aos={idx % 2 === 0 ?"fade-up" : "fade-down"}
    //  data-aos-duration="3000"
            data-aos={idx % 2 === 0 ? "flip-left" : "flip-right"}
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              >
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
