import React from "react"
import PropTypes from "prop-types"

const Collection = ({object}) => (
    <>
        {object.collection && <p><strong>Provenance notes:</strong> {object.collection}</p>}
        {object.museumCollection && <p><strong>Holding museum:</strong> {object.museumCollection}</p>}
    </>
)

Collection.propTypes = {
    object: PropTypes.array.isRequired,
}

Collection.defaultProps = {
    object: [],
}
export default Collection