import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

// API Map for fetching data based on category
const apiMap = {
  touristic: "https://travel-api-54rr.onrender.com/touristic",
  spiritual: "https://travel-api-54rr.onrender.com/spiritual",
  historical: "https://travel-api-54rr.onrender.com/historical",
};
const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  useEffect(() => {
    fetch(apiMap[category]) // Use the category URL from apiMap
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id)); // Find the specific product by id
        setProduct(found);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category, id]);

  // Show loading state
  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
        <p>Loading package details...</p>
      </div>
    );
  }

  // Show error if product not found
  if (!product) {
    return <div className="text-center my-5">Package not found</div>;
  }

  return (
    <Container className="py-5">
      <Row className="align-items-center" style={{ minHeight: "600px" }}>
        {/* Image with animation */}
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center mb-4 mb-md-0"
          style={{ height: "100%" }}
          data-aos="fade-right"
        >
          <div style={{ maxWidth: '100%', maxHeight: '500px', height: '100%' }}>
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid rounded shadow-sm"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </Col>

        {/* Details with animation */}
        <Col
          md={6}
          className="h-100 d-flex align-items-center"
          data-aos="fade-left"
        >
          <Card className="shadow-sm w-100" style={{ minHeight: "500px" }}>
            <Card.Body className="d-flex flex-column justify-content-between h-100">
              <div>
                <Card.Title className="mb-3">{product.title}</Card.Title>
                <p><strong>Location:</strong> {product.location}</p>
                <p className="text-muted">{product.description}</p>

                <div className="bg-light p-3 rounded mb-3">
                  <p><strong>Price:</strong> ₹{product.price}</p>
                  <p><strong>Days:</strong> {product.days}</p>
                  <p><strong>Nights:</strong> {product.nights}</p>
                </div>
              </div>
              <p className="mt-auto"><strong>Rating:</strong> ⭐ {product.rating}</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
