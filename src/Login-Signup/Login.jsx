import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import image from './assets/images/img.jpg'
import bg from './assets/images/bg2.jpg'

const Login = () => {
  return (
    <div
      style={{
        background:`url(${bg})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'cover',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <Card className="p-4 shadow-lg rounded-4">
              <Row className="align-items-center">
                
                <Col md={6} className="mb-4 mb-md-0 text-center">
                  <img
                    src={image}
                    alt="Login Visual"
                    className="img-fluid rounded-4"
                    style={{ maxHeight: '300px' }}
                  />
                </Col>

                <Col md={6}>
                  <h3 className="mb-4 text-center">Login</h3>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                      Login
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Login;
