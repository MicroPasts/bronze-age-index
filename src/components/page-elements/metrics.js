import React from "react";
import PropTypes from "prop-types";

const Metrics = ({object}) => (
    <>
        <ul className={"list-unstyled"}>
            {object.materialTerm && <li>Made from: {object.materialTerm}</li>}
            {object.quantity !== 'NA' && <li>Quantity: {object.quantity}</li>}
            {object.edge && <li>Edge: {object.edge}</li>}
            {object.length && <li>Length: {object.length}</li>}
            {object.thickness && <li>Thickness: {object.thickness}</li>}
            {object.diameter && <li>Diameter: {object.diameter}</li>}
        </ul>
    </>
)

Metrics.propTypes = {
    object: PropTypes.object

}

Metrics.defaultProps = {
    object: [],
}

export default Metrics
