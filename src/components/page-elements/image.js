import React from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import {Row} from "react-bootstrap";

const Image = ({object}) => (
    <>
        {object.imageURL !== 'undefined' && <Row className={"my-2"}><Col md={12}><img src={object.imageURL} alt={object.objectType} className={"img-fluid"}/></Col></Row>}
    </>
)

Image.propTypes = {
    object: PropTypes.array.isRequired,
}

Image.defaultProps = {
    object: [],
}

export default Image