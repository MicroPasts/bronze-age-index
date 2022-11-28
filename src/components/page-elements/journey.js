import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {StaticImage} from "gatsby-plugin-image";


const Journey = () => (
    <Container fluid style={{}} className={'bg-white py-4'}>
        <Row>
            <Col md={6} className="d-flex align-items-center justify-content-center">
                <Col md={8} className="mx-auto align-middle">
                    <h1 className={"text-gradient text-center fw-bolder"}>
                        Discover the Bronze Age ...
                    </h1>
                    <p>
                        The journey to provide a definitive index of Bronze Age implements began in 1913, and then
                        100 years later, the MicroPasts project set about digitising and using the power of the crowd to
                        unlock the paper records.
                    </p>
                    <p>
                        This website combines these antiquarian records with the work of the Portable Antiquities Scheme
                        to enable research into the British Bronze Age's metalwork.
                    </p>
                </Col>
            </Col>
            <Col md={6} className="text-center">
                <StaticImage src={'../../images/call-to-action.jpg'} className={'rounded mx-4'} alt={'Call to action'}/>
            </Col>
        </Row>
    </Container>
)

export default Journey