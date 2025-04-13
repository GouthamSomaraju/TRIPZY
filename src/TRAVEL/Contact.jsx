import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { contactUs } from "./data"; // Assuming you have a data.js file with the contactUs array


function ContactUs() {
  return (
    <div className="my-5 text-center">
      <h1 className="mb-4">Let's connect and get to know each other</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        neque minima voluptas cumque dolores et dolore, molestias incidunt
        similique.
      </p>

      <Row className="justify-content-center">
        {contactUs.map((contact) => (
          <Col md={6} lg={3} key={contact.id} className="mb-4">
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
                <Card.Text>{contact.description}</Card.Text>
                <Card.Text className="text-primary fw-semibold d-flex align-items-center justify-content-center gap-2">
                  <i className={contact.icon} style={{ fontSize: "1.2rem" }}></i>
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
