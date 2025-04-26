import React, { useEffect } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import { contactUs } from "./data"; // Assuming you have a data.js file with the contactUs array
import AOS from "aos";
import "aos/dist/aos.css";
import boat from "./Assets/images/about/boat2.jpg";

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="my-5 text-center">
      <Container className="my-5">
        <div className="w-100">
          <img
            src={boat}
            alt="Travel"
            className="img-fluid w-100 rounded"
            style={{ height: "400px", objectFit: "cover" }}
          />
        </div>
      </Container>

      <Container>
        <div className="text-start">
          <h1 className="fw-bold mb-4 fs-1">Contact Us</h1>
          <h2 className="mb-4">Let's connect and get to know each other</h2>

          <p className="mb-5 p-3 fs-5 fw-semibold">
            Whether you're ready to embark on your next adventure or just have a
            few questions, we’re here to help! Reach out to us through a call,
            email, or connect with us on social media. Let’s start planning
            unforgettable journeys together!
          </p>
        </div>
      </Container>

      <Row className="justify-content-center">
        {contactUs.map((contact, index) => (
          <Col
            md={6}
            lg={3}
            key={contact.id}
            className="mb-4"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <Card className="text-center h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={contact.image}
                className="p-3"
                style={{
                  height: "100px",
                  width: "100px",
                  margin: "0 auto",
                }}
              />
              <Card.Body>
                <Card.Title>{contact.title}</Card.Title>
                <Card.Text className="p-3 ">
                  {contact.description}
                </Card.Text>
                <Card.Text className="text-primary fw-semibold d-flex align-items-center justify-content-center gap-2">
                  <i
                    className={contact.icon}
                    style={{ fontSize: "1.2rem" }}
                  ></i>
                  <span>{contact.contact}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ContactUs;
