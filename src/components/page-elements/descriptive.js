import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import {capitalize} from "lodash";
const Descriptive = ({object}) => (
    <>
    <div className={"description"}>
        {object.description && <ReactMarkdown>{capitalize(object.description)}</ReactMarkdown>}
        {object.notes && <ReactMarkdown>{capitalize(object.notes)}</ReactMarkdown>}
        {object.remarks && <ReactMarkdown>{capitalize(object.remarks)}</ReactMarkdown>}
        {object.composition && <><h3>Composition</h3><ReactMarkdown>{capitalize(object.composition)}</ReactMarkdown></>}
        {object.surface && <><h3>Surface</h3><ReactMarkdown>{capitalize(object.surface)}</ReactMarkdown></>}
        {object.associations && <><h3>Associations</h3>
            <ReactMarkdown>{capitalize(object.associations)}</ReactMarkdown></>}
        {object.publications && <><h3>Publications</h3>
            <ReactMarkdown>{capitalize(object.publications)}</ReactMarkdown></>}
            </div>
    </>
)

Descriptive.propTypes = {
    object: PropTypes.object,
}

Descriptive.defaultProps = {
    object: [],
}

export default Descriptive
