import React from "react";
import PropTypes from "prop-types";

const Who = ({object}) => (
    <>
        {object.identifier && <><h3>Who identified it?</h3><p>{object.identifier}</p></>}
        {object.inputBy && <p>Entered by MicroPasts Contributor: {object.inputBy}</p>}
    </>
)

Who.propTypes = {
    object: PropTypes.object.isRequired,
}

Who.defaultProps = {
    object: [],
}

export default Who