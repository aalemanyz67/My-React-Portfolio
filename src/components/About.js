import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/headshot.jpg";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
        >
            <Image src={avatar} rounded fluid className="about-image"/>
        
          </Col>
          <Col xs={12} md={8}>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center mb-4">
                        About Alberto Aleman Jr.
                    </Card.Title>
                    <Card.Text>
                        As a former 6 grade teacher, I have found a passion for continual learning and for personal intillectual growth. This passion has lead me on a new journey of web development. Starting in early September, I set off on a new journey to learn something new and to start a new career. The University of Texas at Austin's Full Stack Web Develpment Certification has done just that. It has been a challenging 3 months but, they have been full of wonderous new learning.
                    </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
);

}

export default About; 