import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import {
  FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub,
  FaMapMarkerAlt, FaEnvelope, FaPhone, FaPrint
} from 'react-icons/fa';
import logo2 from './Assets/images/Logo/logo2.png';
import './Footer.css';

const socialLinks = [
  { icon: <FaFacebookF />, url: 'https://www.facebook.com/login.php/' },
  { icon: <FaTwitter />, url: 'https://x.com/somarajugoutham' },
  { icon: <FaGoogle />, url: 'https://mail.google.com/mail/?view=cm&to=yourname@gmail.com' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/__.mr__goutham.__' },
  { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/goutham-somaraju/' },
  { icon: <FaGithub />, url: 'https://github.com/GouthamSomaraju' },
];

export default function Footer() {
  return (
    <footer className="footer-custom text-white bg-dark">
      <Container className="footer-inner">

        {/* Social Media Buttons */}
        <div className="footer-social">
          {socialLinks.map(({ icon, url }, idx) => (
            <Button
              key={idx}
              variant="outline-light"
              className="footer-btn"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </Button>
          ))}
        </div>

        {/* Newsletter */}
        <section className="footer-newsletter">
          <Form>
            <Row className="justify-content-center align-items-center">
              <Col xs="auto">
                <p><strong>Sign up for our newsletter</strong></p>
              </Col>
              <Col md={5}>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email"
                  className="footer-input"
                />
              </Col>
              <Col xs="auto">
                <Button variant="outline-light" type="submit">
                  Subscribe
                </Button>
              </Col>
            </Row>
          </Form>
        </section>

        {/* Info Columns */}
        <Row className="footer-info justify-content-center text-center">
          <Col lg={4} md={12}>
            <img src={logo2} alt="Tour Travel" width="170" height="50" className="mb-2" />
            <p>
              Explore the world with us! We offer custom travel plans, group tours,
              and unforgettable adventures to the most beautiful places on Earth.
            </p>
          </Col>

          <Col lg={2} md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/packages" className="text-white">Packages</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li><a href="/packages" className="text-white">Tour Packages</a></li>
              <li><a href="/packages" className="text-white">Travel Insurance</a></li>
              <li><a href="/packages" className="text-white">Flight Booking</a></li>
              <li><a href="/packages" className="text-white">Hotel Deals</a></li>
            </ul>
          </Col>

          <Col lg={3} md={4}>
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li><FaMapMarkerAlt className="me-2" /> Hyderabad, Telangana India</li>
              <li><FaEnvelope className="me-2" /> info@traveltour.com</li>
              <li><FaPhone className="me-2" /> +91 7674938299</li>
              <li><FaPrint className="me-2" /> +91 8328415349</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="footer-bottom text-center">
        © 2025 Tripzy | All rights reserved
      </div>
    </footer>
  );
}

