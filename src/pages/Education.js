import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Education.css';

export default function Education() {
  return (
    <section className="education-section">
      <Container>
        <h2 className="education-title text-center">My <span>Education</span></h2>
        
        <Row className="justify-content-center mb-5">
          <Col lg={8} md={10} className="mb-4">
            <div className="education-card">
              <h2>Licenses & Certifications</h2>
              <ul className="certification-list">
                <li><span className="cert-title">Python for Beginners</span> - <span className="cert-issuer">Dept. of Computer Science & Engineering, University of Moratuwa (Feb 2026)</span></li>
                <li><span className="cert-title">Introduction to Data Science</span> - <span className="cert-issuer">Cisco Networking Academy (Nov 2025)</span></li>
                <li><span className="cert-title">ICT Certificate Course</span> - <span className="cert-issuer">Open University of Sri Lanka</span></li>
                <li><span className="cert-title">Foundation Diploma in English</span> - <span className="cert-issuer">Eurasian Campus</span></li>
                <li><span className="cert-title">English Certificate Course</span> - <span className="cert-issuer">Open University of Sri Lanka</span></li>
              </ul>
            </div>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col lg={4} md={6} className="mb-4">
            <div className="education-card">
              <span className="education-duration">2024 - Present</span>
              <h3>National Diploma in Technology (IT)</h3>
              <h4>Institute of Technology University of Moratuwa (ITUM)</h4>
              <p>
                Currently pursuing my diploma in Information Technology. 
                Gaining hands-on experience in software development, web technologies, and human-computer interaction.
              </p>
            </div>
          </Col>

          
          <Col lg={4} md={6} className="mb-4">
            <div className="education-card">
              <span className="education-duration">2023</span>
              <h3>ICT Technician(NVQ 4)</h3>
                <h4>National Vocational Qualification (NVQ) - Sri Lanka</h4>
                <p>
                Completed the ICT Technician (NVQ 4) program. Gained practical skills in computer hardware, software, and networking.
                </p>
            </div>
          </Col>

          
          <Col lg={4} md={6} className="mb-4">
            <div className="education-card">
              <span className="education-duration">2019 - 2021</span>
              <h3>G.C.E. Advanced Level</h3>
              <h4>Sri Devananda College - Ambalangoda</h4>
              <p>
                Com. Mathematics: B | Physics: S | Chemistry: S
              </p>
            </div>
          </Col>

          
          <Col lg={4} md={6} className="mb-4">
            <div className="education-card">
              <span className="education-duration">2018</span>
              <h3>G.C.E. Ordinary Level</h3>
              <h4>Sri Devananda College - Ambalangoda</h4>
              <p>
                9 A's including Science, Maths, English, and ICT.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
