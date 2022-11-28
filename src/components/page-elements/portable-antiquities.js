import React from "react";
import PropTypes from "prop-types";

const PortableAntiquities = ({object}) => (
    <>
        {object.PASID &&
            <p><a href={`https://finds.org.uk/database/artefacts/record/id/${object.PASID}`}>View this on the Portable
                Antiquities Scheme Database</a></p>}
    </>
)

PortableAntiquities.propTypes = {
    object: PropTypes.array.isRequired,
}

PortableAntiquities.defaultProps = {
    object: [],
}

export default PortableAntiquities