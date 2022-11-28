import React from "react"
import PropTypes from "prop-types"

const Dating = ({object}) => (
    <>
        <h2 className={"object-heading"}>Dating</h2>
        <p>{object.broadperiod} {object.fromdate && Math.abs(object.fromdate) + 'BC'} {object.todate && ' - ' + Math.abs(object.todate) + 'BC'}</p>
    </>
)

Dating.propTypes = {
dating: PropTypes.array.isRequired,
}
Dating.defaultProps = {
dating: [],
}

export default Dating