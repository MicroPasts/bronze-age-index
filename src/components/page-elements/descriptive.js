import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";

const Descriptive = ({object}) => (
    <>
        {object.description && <ReactMarkdown>{object.description}</ReactMarkdown>}
        {object.notes && <ReactMarkdown>{object.notes}</ReactMarkdown>}
        {object.remarks && <ReactMarkdown>{object.remarks}</ReactMarkdown>}
        {object.composition && <><h3>Composition</h3><ReactMarkdown>{object.composition}</ReactMarkdown></>}
        {object.surface && <><h3>Surface</h3><ReactMarkdown>{object.surface}</ReactMarkdown></>}
        {object.associations && <><h3>Associations</h3>
            <ReactMarkdown>{object.associations}</ReactMarkdown></>}
        {object.publications && <><h3>Publications</h3>
            <ReactMarkdown>{object.publications}</ReactMarkdown></>}
    </>
)

Descriptive.propTypes = {
    object: PropTypes.array.isRequired,
}

Descriptive.defaultProps = {
    object: [],
}

export default Descriptive