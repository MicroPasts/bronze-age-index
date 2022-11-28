import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "gatsby";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faGithub,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons'


// See https://stackoverflow.com/a/37073268 : add multiple classes
import * as containerStyles from "../../styles/footer-style.module.css";
// Merge the classes together
const classes = `mt-auto ${containerStyles.footer}`

// The Footer takes two sets of link array to produce some menu items - About me and services I can offer.
const Footer = ({aboutLinks}) => {
    return (
        <>
            <footer className={classes}>
                <Container>
                    <Row className="pt-3 pb-5 h-25">
                        <Col md={4}>
                            <h3 className={"visually-hidden"}>Licensing</h3>
                            <p className="text-white">
                                Words: <a href={'https://creativecommons.org/licenses/by/4.0/'}>CC-BY</a><br/>
                                Images: <a href={'https://creativecommons.org/licenses/by/4.0/'}>CC-BY</a><br/>
                                Code: <a href={'https://opensource.org/licenses/0BSD'}>OBSD</a><br/>
                                &copy; {new Date().getFullYear()}
                            </p>
                        </Col>
                        <Col md={2}>
                            <h3 className={"visually-hidden"}>About the project</h3>
                            <ul className="text-white">
                                {aboutLinks.map(link => (
                                    <li key={link.id}>
                                        <Link className="text-white" to={link.link}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col md={6}>
                            <h3 className={"visually-hidden"}>Follow us</h3>
                            <a href="https://facebook.com/micropasts" className="text-white"
                               aria-label="Our facebook profile"><FontAwesomeIcon icon={faFacebook} size="2x" className="m-2" /></a>
                            <a href="https://twitter.com/micropasts" className="text-white"
                               aria-label="Our twitter profile"><FontAwesomeIcon icon={faTwitter} size="2x" className="m-2"/></a>
                            <a href="https://github.com/micropasts" className="text-white"
                               aria-label="Our GitHub account profile"><FontAwesomeIcon icon={faGithub} size="2x" className="m-2" /></a>
                            <a href="https://www.youtube.com/@micropasts3076/" className="text-white"
                               aria-label="Our YouTube profile"><FontAwesomeIcon icon={faYoutube} size="2x" className="m-2" /></a>

                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
};


Footer.propTypes = {
    aboutLinks: PropTypes.array
}

Footer.defaultProps = {
    aboutLinks: ``
}

export default Footer;