import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <Container>
        <h2 className="contact-title text-center">Let's <span>Connect</span></h2>
        
        <Row className="justify-content-center align-items-center mt-5">
          <Col lg={4} md={10} className="mb-5 mb-lg-0">
            <div className="contact-info-container">
              
              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt size={22} />
                </div>
                <div className="contact-details">
                  <h4>Location</h4>
                  <p>No.436, Dalukkanda Road, Egodawela,<br/>Karandeniya</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaEnvelope size={22} />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>jayampathithraka@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <FaPhoneAlt size={22} />
                </div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>0771959646</p>
                </div>
              </div>

            </div>
          </Col>

          
          <Col lg={7} md={10} className="offset-lg-1">
            <div className="contact-form-card">
              <Form className="contact-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-4">
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                </Form.Group>

                <button type="submit" className="submit-btn" onClick={(e) => e.preventDefault()}>
                  Send Message
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
