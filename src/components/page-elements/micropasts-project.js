import React from "react";
import PropTypes from "prop-types";

const MicropastsProject = ({object}) => (
    <>
        {object.project && <>
            <p><a href={`https://crowdsourced.micropasts.org/project/${object.project}`}>Micropasts Project</a></p>
            <p>This record was generated by the MicroPasts community in 2014, during the major citizen science project that
                catalogued these index cards. There maybe errors below.</p>
        </>}
    </>
);

MicropastsProject.propTypes = {
    object: PropTypes.array.isRequired,
}

MicropastsProject.defaultProps = {
    object: [],
}

export default MicropastsProject;