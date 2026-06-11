import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import Profile from '../component/profile';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-bg">
      <Container className="home-section">
        <Row className="align-items-center">
          <Col md={7} className="text-content">
            <div className="intro">HELLO, I'M</div>
      <h1 className="name1">Tharaka</h1>
      <h1 className="name2">Jayampathi</h1>
      <div className="typing-text">
        Frontend Developer | Web Designer |<br/> 
        Data Science Enthusiast
      </div>
      <p className="description">
        Passionate about technology, web design, and continuous learning. 
        Currently expanding my expertise at the Institute of Technology, University of Moratuwa.
      </p>
      
      <div className="social-links">

        <a href="https://github.com/Tharaka-Jayampathi" target="_blank" rel="noreferrer" className="social-icon">
          <FaGithub size={28} />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">
          <FaLinkedin size={28} />
        </a>

        <a href="mailto:jayampathitharaka@gmail.com" className="social-icon">
          <FaEnvelope size={28} />
        </a>

      </div>
          
          </Col>
          <Col md={4}>
            <Profile />
          </Col>

        </Row>
      </Container>

    </div>
  );
}
