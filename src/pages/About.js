import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <Container>
        <h2 className="about-title">About <span>Me</span></h2>
        
        <Row className="mt-5">
          <Col lg={6} md={12} className="mb-5 pe-lg-5">
            <h3 className="about-subtitle">Get to know me</h3>
            <p className="about-text">
              Hello! I am Tharaka Jayampathi, an enthusiastic IT professional with a foundation in web design and technical support. With a strong academic background and practical experience as an ICT Technician, I am dedicated to creating efficient and visually appealing digital solutions.
            </p>
            
            <div className="contact-info">
              <div>
                <p className="contact-item-label">PHONE:</p>
                <p className="contact-item-value">0771959646</p>
              </div>
              <div>
                <p className="contact-item-label">EMAIL:</p>
                <p className="contact-item-value">jayampathithraka@gmail.com</p>
              </div>
              <div>
                <p className="contact-item-label">LOCATION:</p>
                <p className="contact-item-value">Karandeniya, Sri Lanka</p>
              </div>
              <div>
                <p className="contact-item-label">LANGUAGES:</p>
                <p className="contact-item-value">English, Sinhala</p>
              </div>
            </div>
          </Col>
          
          <Col lg={6} md={12}>
            <h3 className="about-subtitle mb-4">My Skills</h3>
            <div className="skills-container">
              <div className="skill-badge">
                Python Programming
              </div>
              <div className="skill-badge">
                Data Science
              </div>
              <div className="skill-badge">
                AI Services
              </div>
              <div className="skill-badge">
                Data Engineering
              </div>
              <div className="skill-badge">
                Web Design
              </div>
              <div className="skill-badge">
                JavaScript
              </div>
              <div className="skill-badge">
                Springboot
              </div>
              <div className="skill-badge">
                React
              </div>
              <div className="skill-badge">
                C Programming
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
