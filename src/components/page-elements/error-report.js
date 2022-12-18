import React from "react";
import PropTypes from "prop-types";

const ErrorReport = ({object}) => (
    <>
        <a href={"https://docs.google.com/forms/d/e/1FAIpQLSdyC8Py0lkKl6UqJiUoesyP_AWoFWr5AbC4EXdB1JMawRQkIw/viewform?usp=pp_url&entry.1883348904=" + object.objectID} className={"btn btn-dark text-white my-2"}>Spotted an error? Tell us about it...</a>
    </>
)

ErrorReport.propTypes = {
    object: PropTypes.object,
}

ErrorReport.defaultProps = {
    object: [],
}

export default ErrorReport
