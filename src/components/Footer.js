import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.css";

//Contact objects with name, url, icon and color

const myContact = [
    {
        name: "GitHub",
        url: "https://github.com/aalemanyz67",
        icon: faGithub,
        color: "#5DE512",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alberto-aleman-b205672a1/",
        icon: faLinkedin,
        color: "#2EACE8"

    }
    
];

//this is my footer component
const Footer = () => {
    return (
        <footer className="footer bg-dark text-white">
            <div className="footer-container">
                <section className="social-icons-wrapper d-flex flex-md-row justify-content-center">
                    {myContact.map(({name, url, icon, color}) => (
                        <div
                        key={name}
                        className="d-flex flex-column align-items-center mx-md-2 transparent-bg"
                    >
                        <a
                          href={url}
                          className={`icon ${name}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                            <FontAwesomeIcon
                               icon={icon}
                               bounce
                               className="footer-icon-size"
                               style={{ color: color}}
                            />
                        </a>
                        <a href={url} target="_blank" rel="noreferrer">
                            <span className="d-inline-block mx-1 name">{name}</span>
                        </a>
                    </div>
                    ))}
                </section>
                <section className="form-footer">
                <h5 className="designer-text">Made by Alberto Aleman Jr.</h5>
                    <p>
                    <h6 className="copyright-text">&copy; {new Date().getFullYear()} All Rights reserved.</h6>
                    </p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;