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
              Hello! I am Tharaka Jayampathi, an enthusiastic IT student currently pursuing my National Diploma in Technology at the Institute of Technology, University of Moratuwa. I have a strong foundation in frontend development and web design, specializing in technologies like React, JavaScript, HTML, and CSS. Beyond web development, I am a passionate Data Science enthusiast. My ultimate career aspiration is to become a versatile Frontend Developer and Data Science professional, building visually engaging and intelligent digital experiences.
            </p>
            

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
        
        <h3 className="about-subtitle mt-5 mb-4 text-center">My Education & Certifications</h3>
        
        <Row className="justify-content-center mb-5">
          <Col lg={8} md={10} className="mb-4">
            <div className="education-card">
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px' }}>Licenses & Certifications</h2>
              <ul className="certification-list">
                <li><span className="cert-title">Python for Beginners</span> - <span className="cert-issuer">Dept. of Computer Science & Engineering, University of Moratuwa (Feb 2026)</span></li>
                <li><span className="cert-title">Introduction to Data Science</span> - <span className="cert-issuer">Cisco Networking Academy (Nov 2025)</span></li>
                <li><span className="cert-title">ICT Certificate Course</span> - <span className="cert-issuer">Open University of Sri Lanka</span></li>
                <li><span className="cert-title">ICT Technician(NVQ 4)</span> - <span className="cert-issuer">National Vocational Qualification (NVQ) - Sri Lanka</span></li>
                <li><span className="cert-title">Foundation Diploma in English</span> - <span className="cert-issuer">Eurasian Campus</span></li>
                <li><span className="cert-title">English Certificate Course</span> - <span className="cert-issuer">Open University of Sri Lanka</span></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
