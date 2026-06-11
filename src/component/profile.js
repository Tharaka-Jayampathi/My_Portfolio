import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './profile.css';


export default function profile() {
  return (
    <Container>
      <Row>
        <Col xs={12} className="profile-align-right">
          <Image src="/Image1.jpeg" roundedCircle className="profile-picture" />
        </Col>
      </Row>
    </Container>
  )
}
