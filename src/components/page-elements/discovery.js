import React from "react";
import PropTypes from "prop-types";

const Discovery = ({object}) => (
    <>
        {object.datefound1 &&  <><h3>Discovery</h3>
            <p>
                {object.discoveryMethod}<br/>
                {object.datefound1 !== 'Invalid date' && <span>{object.datefound1}</span>} {object.datefound2 !== 'Invalid date' &&
                <span> - {object.datefound1}</span>}
            </p></>}
    </>
)

Discovery.propTypes = {
    object: PropTypes.array.isRequired,
}

Discovery.defaultProps = {
    object: [],
}

export default Discovery