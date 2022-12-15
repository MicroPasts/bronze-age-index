import React from "react";
import {Container,Col,Row} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";

const Peripleo = () => (
    <Container fluid style={{}} className={'bg-dark py-4 text-white'}>
        <Row>

            <Col md={6} className="text-center p-2 my-2">
                <StaticImage src={'../../images/peripleo.png'} className={'rounded mx-4'} alt={'Call to action'}/>
            </Col>

            <Col md={6} className="d-flex align-items-center justify-content-center p-2 my-2">
                <Col md={8} className="mx-auto align-middle">
                    <h1 className={"display-4 text-center fw-bolder"}>
                        Uncover the past
                    </h1>
                    <p>
                        Building on collaboration, friendship and trust, the MicroPasts team have worked with the team behind
                        Peripleo (funded in part by the British Library's Locating a National Collection, to create a map interface for
                        interrogating discovery of material in the Bronze Age Index.
                    </p>
                    <p>
                        These data in the BAI are generally approximated coordinates based on placenames (geocoded against OpenStreetMap's Nominatim API), whilst the included PAS data
                        only includes records with a location that is unmasked and uses the four figure grid reference system to create the point.
                    </p>

                    <p className={"text-center"}>
                        <a href="https://mapping-the-bronze-age.micropasts.org" className="btn btn-outline rounded-0 border-white my-1 mx-2">Explore the Bronze Age Index on Peripleo</a>
                    </p>
                    <p className={"text-center"}>
                        <img src={'https://mapping-the-bronze-age.micropasts.org/startup-logo.svg'} className={'rounded mx-4'} alt={'Call to action'}/>
                    </p>
                </Col>
            </Col>


        </Row>
    </Container>
)

export default Peripleo