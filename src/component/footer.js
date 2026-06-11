import React from 'react';
import { Container } from 'react-bootstrap';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container className="text-center">
        <p className="footer-text mb-0">
          &copy; {new Date().getFullYear()} Tharaka Jayampathi. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
}
