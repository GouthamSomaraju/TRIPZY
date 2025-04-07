import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-white' bgColor='dark'>
      <MDBContainer className='p-4'>

        {/* Social Media Buttons */}
        <section className='mb-4 d-flex justify-content-center'>
          <MDBBtn
            outline
            color="light"
            floating
            className='me-2 rounded-circle d-flex align-items-center justify-content-center'
            href='https://www.facebook.com/login.php/'
            target="_blank"
            rel="noopener noreferrer"
            role='button'
            style={{ width: '40px', height: '40px' }}
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className='me-2 rounded-circle d-flex align-items-center justify-content-center'
            href='https://x.com/somarajugoutham'
            target="_blank"
            rel="noopener noreferrer"
            role='button'
            style={{ width: '40px', height: '40px' }}
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className='me-2 rounded-circle d-flex align-items-center justify-content-center'
            href='https://mail.google.com/mail/?view=cm&to=yourname@gmail.com'
            target="_blank"
            rel="noopener noreferrer"
            role='button'
            style={{ width: '40px', height: '40px' }}
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className='me-2 rounded-circle d-flex align-items-center justify-content-center'
            href='https://www.instagram.com/__.mr__goutham.__'
            target="_blank"
            rel="noopener noreferrer"
            role='button'
            style={{ width: '40px', height: '40px' }}
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className='me-2 rounded-circle d-flex align-items-center justify-content-center'
            href='https://www.linkedin.com/in/goutham-somaraju/'
            target="_blank"
            rel="noopener noreferrer"
            role='button'
            style={{ width: '40px', height: '40px' }}
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className='rounded-circle d-flex align-items-center justify-content-center'
            href='https://github.com/GouthamSomaraju'
            target="_blank"
            rel="noopener noreferrer"
            role='button'
            style={{ width: '40px', height: '40px' }}
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <MDBRow>
          {/* Company Info */}
          <MDBCol lg='4' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Travel Tour</h5>
            <p>
              Explore the world with us! We offer custom travel plans, group tours, and unforgettable adventures to the most beautiful places on Earth.
            </p>
          </MDBCol>

          {/* Quick Links */}
          <MDBCol lg='2' md='4' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Quick Links</h5>
            <ul className='list-unstyled'>
              <li><a href='#!' className='text-white'>Home</a></li>
              <li><a href='#!' className='text-white'>About</a></li>
              <li><a href='#!' className='text-white'>Destinations</a></li>
              <li><a href='#!' className='text-white'>Contact</a></li>
            </ul>
          </MDBCol>

          {/* Products */}
          <MDBCol lg='3' md='4' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Products</h5>
            <ul className='list-unstyled'>
              <li><a href='#!' className='text-white'>Tour Packages</a></li>
              <li><a href='#!' className='text-white'>Travel Insurance</a></li>
              <li><a href='#!' className='text-white'>Flight Booking</a></li>
              <li><a href='#!' className='text-white'>Hotel Deals</a></li>
            </ul>
          </MDBCol>

          {/* Contact Info */}
          <MDBCol lg='3' md='4' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Contact Info</h5>
            <ul className='list-unstyled'>
              <li><MDBIcon icon="map-marker-alt" className='me-2' /> New York, NY 10012, US</li>
              <li><MDBIcon icon="envelope" className='me-2' /> info@traveltour.com</li>
              <li><MDBIcon icon="phone" className='me-2' /> + 01 234 567 88</li>
              <li><MDBIcon icon="print" className='me-2' /> + 01 234 567 89</li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2025 Travel Tour | All rights reserved
      </div>
    </MDBFooter>
  );
}
