import React from "react";
import PropTypes from "prop-types";
import {Alert} from "react-bootstrap";

const contStyles = {
    color: "#000",
}

const MicropastsProject = ({object}) => (
    <>
        {object.project && <>

            <Alert variant="info" style={contStyles}>
                <Alert.Heading className={"fw-bolder text-center"}>Crowd-powered data!</Alert.Heading>
                This record was generated by the MicroPasts community during our citizen science
                    projects that catalogued these index cards. There maybe errors below, and if you find any, please get in
                    touch.
            </Alert>
            <a className={"btn btn-dark my-2 text-white rounded-0"}
               href={`/projects/${object.project}`}>This was part of Micropasts
                Project labelled - {object.project}</a>
        </>}
    </>
);

MicropastsProject.propTypes = {
    object: PropTypes.object.isRequired,
}

MicropastsProject.defaultProps = {
    object: [],
}

export default MicropastsProject;
