import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './profile.css';
import image1 from './Image1.jpeg';

export default function profile() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="profile-align-right">
          <Image src={image1} roundedCircle className="profile-picture" />
        </Col>
      </Row>
    </Container>
  )
}
