import React from "react";
import PropTypes from "prop-types";

const Subsequent = ({object}) => (
    <>
        {object.subsequentActionTerm && <><h3>What happened to it?</h3>
            <p>{object.subsequentActionTerm}</p></>}
        </>
)

Subsequent.propTypes = {
    object: PropTypes.object.isRequired,
}

Subsequent.defaultProps = {
    object: [],
}

export default Subsequent