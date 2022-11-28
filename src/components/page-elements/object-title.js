import React from "react";
import PropTypes from "prop-types";

const contStyles = {
    color: "purple",
    marginTop: "4rem",
}

const ObjectTitle = ({ object }) => (
    <h1 className="fw-bolder" style={contStyles}>
        {object.objectID.toUpperCase() + ': '} {object.objectType}
    </h1>
)

ObjectTitle.propTypes = {
    object: PropTypes.array.isRequired,
}

ObjectTitle.defaultProps = {
    object: [],
}

export default ObjectTitle