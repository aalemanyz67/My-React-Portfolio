import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../style/Contact.css";

function Contact() {
    //setting initial state for name, email, message, and form errors
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage] = useState("");
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [ messageSent, setMessageSent] = useState(false);

    //handle for the name input change
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };
     //handle for the email input change
     const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(false);
    };
     //handle for the message input change
     const handleMessageChange = (e) => {
        setMessage(e.target.value);
        setMessageError(false);
    };
    //Using regex to validate email
    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    //submission handle
    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        
        //This validates input fields and set errors when necessary
        if (name.length <= 5) {
            setNameError(true);
            valid = false;
        }
        if (!validateEmail(email)) {
            setEmailError(true);
            valid = false;
        }

        //when all fields are valid log data and reset inputs
        if (valid) {
            console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
            setName("");
            setEmail("");
            setMessage("");
            setMessageSent(true);
        }
    };
    //this will render the contact form
    return (
        <section id="contact">
            <Container>
                <Row>
                    <Col lg={8} className="mx-auto">
                        <h2 className="contact-header">Contact Me</h2>
                        {messageSent && (
                            <div className="alert alert-success" role="alert">
                                Your Message has been sent!
                            </div>
                        )}
                        <Form onSubmit={handleSubmit} noValidate>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    className={nameError ? "is-invalid" : ""}
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    required
                                />
                                {nameError && (
                                    <div className="invalid-feedback">
                                        Name must have more than 5 characters!
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email"> Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    className={emailError ? "is-invalid" : ""}
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && (
                                    <div className="invalid-feedback">
                                        You need a valid email!
                                    </div>
                                )}
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="message">Message:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    className={messageError ? "is-invalid" : ""}
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={message}
                                    onChange={handleMessageChange}
                                />
                                {messageError && (
                                    <div className="invalid-feedback">
                                        Message needs to be at least 150 Characters!
                                    </div>
                                )}  
                            </Form.Group>
                            <Button type="submit" className="custom-send-message-button">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}


export default Contact;