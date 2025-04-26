import React from 'react';
import {
  MDBFooter,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import logo2 from './Assets/images/Logo/logo2.png';
import './Footer.css'; 

export default function Footer() {
  return (
    <MDBFooter className='footer-custom text-white' bgColor='dark'>
      <div className='footer-inner'>

        {/* Social Media Buttons */}
        <section className='footer-social'>
          {[
            { icon: 'facebook-f', url: 'https://www.facebook.com/login.php/' },
            { icon: 'twitter', url: 'https://x.com/somarajugoutham' },
            { icon: 'google', url: 'https://mail.google.com/mail/?view=cm&to=yourname@gmail.com' },
            { icon: 'instagram', url: 'https://www.instagram.com/__.mr__goutham.__' },
            { icon: 'linkedin-in', url: 'https://www.linkedin.com/in/goutham-somaraju/' },
            { icon: 'github', url: 'https://github.com/GouthamSomaraju' },
          ].map(({ icon, url }, i) => (
            <MDBBtn
              key={i}
              outline
              color="light"
              floating
              className='footer-btn'
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              role='button'
            >
              <MDBIcon fab icon={icon} />
            </MDBBtn>
          ))}
        </section>

        {/* Newsletter */}
        <section className='footer-newsletter'>
          <form>
            <MDBRow className='justify-content-center'>
              <MDBCol size="auto">
                <p><strong>Sign up for our newsletter</strong></p>
              </MDBCol>
              <MDBCol md='5'>
                <MDBInput contrast type='email' placeholder='Enter your Email' className='footer-input' />
              </MDBCol>
              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        {/* Info Columns */}
        <MDBRow className='footer-info justify-content-center'>
          <MDBCol lg='4' md='12'>
            <img
              src={logo2}
              alt="Tour Travel"
              width="170"
              height="50"
              className="d-inline-block align-top mb-2"
            />
            <p>
              Explore the world with us! We offer custom travel plans, group tours, and unforgettable adventures to the most beautiful places on Earth.
            </p>
          </MDBCol>

          <MDBCol lg='2' md='4'>
            <h5>Quick Links</h5>
            <ul className='list-unstyled'>
              <li><a href="/" className='text-white'>Home</a></li>
              <li><a href="/about" className='text-white'>About</a></li>
              <li><a href="/packages" className='text-white'>Packages</a></li>
              <li><a href="/contact" className='text-white'>Contact</a></li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='4'>
            <h5>Products</h5>
            <ul className='list-unstyled'>
              <li><a href='/packages' className='text-white'>Tour Packages</a></li>
              <li><a href='/packages' className='text-white'>Travel Insurance</a></li>
              <li><a href='/packages' className='text-white'>Flight Booking</a></li>
              <li><a href='/packages' className='text-white'>Hotel Deals</a></li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='4'>
            <h5>Contact Info</h5>
            <ul className='list-unstyled'>
              <li><MDBIcon icon="map-marker-alt" className='me-2' /> Hyderabad, Telangana India</li>
              <li><MDBIcon icon="envelope" className='me-2' /> info@traveltour.com</li>
              <li><MDBIcon icon="phone" className='me-2' /> +91 7674938299</li>
              <li><MDBIcon icon="print" className='me-2' /> +91 8328415349</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </div>

      <div className='footer-bottom text-center'>
        © 2025 Tripzy | All rights reserved
      </div>
    </MDBFooter>
  );
}
