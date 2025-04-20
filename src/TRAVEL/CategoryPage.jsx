// CategoryPage.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // <-- Import Link
import { Card, Row, Col, Container, Spinner } from "react-bootstrap";

const apiMap = {
  touristic: "https://travel-api-54rr.onrender.com/touristic",
  spiritual: "https://travel-api-54rr.onrender.com/spiritual",
  historical: "https://travel-api-54rr.onrender.com/historical",
};

const CategoryPage = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(apiMap[category])
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" />
        <p>Loading {category} packages...</p>
      </div>
    );
  }

  return (
    <div className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 text-capitalize">{category} Packages</h2>
        <Row>
          {data.map((dest) => (
            <Col md={6} lg={4} key={dest.id} className="mb-4">
              <Link to={`/${category}/${dest.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Card className="h-100 shadow-sm">
                  <Card.Img variant="top" src={dest.image} />
                  <Card.Body>
                    <Card.Title>{dest.title}</Card.Title>
                    <Card.Text className="text-muted">{dest.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CategoryPage;
