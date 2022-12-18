import React from "react";
import PropTypes from "prop-types";

const contStyles = {
    color: "#000",
    marginTop: "4.5rem",
}

const ObjectTitle = ({ object }) => (
  <>
  <div>
    <h1 className="fw-bolder" style={contStyles}>
        {object.objectID.toUpperCase() + ': '} {object.objectType}
    </h1>
  </div>
  </>
)

ObjectTitle.propTypes = {
    object: PropTypes.object
}

ObjectTitle.defaultProps = {
    object: [],
}

export default ObjectTitle
