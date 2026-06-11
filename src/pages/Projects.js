import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "SCM Order & Billing Module",
      description: "A comprehensive Supply Chain Management module for handling orders and billing processes efficiently.",
      url: "https://github.com/Tharaka-Jayampathi/SCM_Order_-_Billing_Module",
      languages: ["React", "Spring Boot", "MySQL"]
    },
    
    {
      title: "Luigi's Pizza Project",
      description: "A web application for a pizza restaurant, likely featuring a menu, ordering system, and responsive design.",
      url: "https://github.com/Tharaka-Jayampathi/Luigi-s-Pizza-Project",
      languages: ["React", "JavaScript", "CSS", "HTML"]
    },

    {
      title: "Weather Dashboard",
      description: "A weather application that fetches and displays real-time weather data and forecasts.",
      url: "https://github.com/Tharaka-Jayampathi/Weather-Dashboard",
      languages: ["React", "API", "CSS", "HTML", "JavaScript"]
    },

    {
      title: "Smart Home Automation System",
      description: "A project focused on automating home devices and systems for improved convenience and energy efficiency.",
      url: "https://github.com/Tharaka-Jayampathi/Smart_Home_Automation_System",
      languages: ["C programming"]
    },

  ];

  return (
    <section className="projects-section">
      <Container>
        <h2 className="projects-title text-center">Featured <span>Projects</span></h2>
        
        <Row className="mt-5 justify-content-center">
          {projects.map((project, index) => (
            <Col lg={4} md={6} className="mb-5" key={index}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.languages && project.languages.map((lang, idx) => (
                    <span key={idx} className="project-tag">{lang}</span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="github-btn">
                  View on GitHub
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
