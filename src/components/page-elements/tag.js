import React from "react"
import {startCase} from "lodash";
import PropTypes from "prop-types"
import {Col, Container, Row,Badge} from "react-bootstrap";

const Tags = ({object}) => (
    <>
        {object && <Container fluid>
            <Container>
                <Row>
                    {object.context && <Col md={12} className="px-4 mb-2">
                           <Badge bg="dark" className={"my-2 p-2"}>{startCase( object.context )}</Badge>
                    </Col>}
                </Row>
            </Container>
        </Container>}
    </>
)

Tags.propTypes = {
    object: PropTypes.object.isRequired
}

Tags.defaultProps = {
    object: [],
}

export default Tags;
