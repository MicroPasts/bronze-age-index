import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types"

const Logos = ({ logos }) => {

    return (
        <Container fluid className={"bg-white p-4 container-fluid text-black"}>
            <Col md={10} className={"mx-auto"}>
                <Row className={"d-flex flex-wrap justify-content-center"}>
                    {logos.map(logo => (
                    <Col key={logo.id} md={2} className={"col-sm-2 text-center"}>
                        <a href={logo.link}><img
                            className="img-fluid mx-auto"
                            alt={logo.institution}
                            src={logo.image}
                            loading="lazy" /></a>
                    </Col>
                    ))}
                </Row>
            </Col>
        </Container>
    )
}

Logos.propTypes = {
    logos: PropTypes.array

}

Logos.defaultProps = {
    logos: ``
}

export default Logos
