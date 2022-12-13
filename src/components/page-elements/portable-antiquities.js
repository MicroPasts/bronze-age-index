import React from "react";
import PropTypes from "prop-types";

const PortableAntiquities = ({object}) => (
    <>
        {object.PASID &&
            <a className={"btn btn-dark my-2 text-white"} href={`https://finds.org.uk/database/artefacts/record/id/${object.PASID}`}>View this on the Portable
                Antiquities Scheme's Database</a>}
    </>
)

PortableAntiquities.propTypes = {
    object: PropTypes.object.isRequired,
}

PortableAntiquities.defaultProps = {
    object: [],
}

export default PortableAntiquities