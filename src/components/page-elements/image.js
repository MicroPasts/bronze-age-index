import React from "react";
import PropTypes from "prop-types";
import {Row, Col} from "react-bootstrap";

const Image = ({object}) => (
    <>
        {object.imageURL !== 'undefined' &&
            <Row className={"my-2"}><Col md={12}><img src={object.imageURL} alt={object.objectType}
                                                      className={"img-fluid"}/></Col></Row>}
        {object.flickrURL &&
            <Row className={"my-2"}><Col md={12}><a href={object.flickrURL} className={"btn-dark btn my-1 text-white rounded-0"}>View and
                download this via Flickr</a></Col></Row>}
        {object.imageCopyrightHolder && <Col md={12}><p className={"fw-bolder"}>Image courtesy {object.imageCopyrightHolder}</p></Col>}
    </>
)

Image.propTypes = {
    object: PropTypes.object.isRequired,
}

Image.defaultProps = {
    object: [],
}

export default Image