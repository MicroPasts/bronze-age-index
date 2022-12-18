import React from "react"
import PropTypes from "prop-types"

const Dating = ({object}) => (
    <>
    <div className={"dating"}>
        <h2 className={"object-heading"}>Dating</h2>
        <p>{object.broadperiod} {object.fromdate && Math.abs(object.fromdate) + 'BC'} {object.todate && ' - ' + Math.abs(object.todate) + 'BC'}</p>
    </div>
    </>
)

Dating.propTypes = {
    dating: PropTypes.array
}
Dating.defaultProps = {
    dating: [],
}

export default Dating
