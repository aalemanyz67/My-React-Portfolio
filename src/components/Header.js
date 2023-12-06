import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { Container, Row, Col } from "react-bootstrap";
import "../style/Header.css";

//this is the header component
function Header(){
    return (
        <>
        <Container fluid className="bg-dark">
            <Row className="justify-content-center text-center mb-0">
                <Col className="pb-0">
                    <h1 className="Text-white" style={{fontSize: "70px"}}>
                        <Link 
                            to="/My-React-Portfolio/"
                            className="text-white text-decoration-none"
                            style={{ margin: "0"}}
                        >
                            Alberto Aleman Jr.
                        </Link>
                    </h1>
                </Col>
            </Row>
        </Container>
        <Navigation/>
        </>
    );
}

export default Header;