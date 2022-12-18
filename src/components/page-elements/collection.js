import React from "react"
import PropTypes from "prop-types"

const Collection = ({object}) => (
    <>
    <div>
        {object.collection && <p><strong>Provenance notes:</strong> {object.collection}</p>}
        {object.museumCollection && <p><strong>Holding museum:</strong> {object.museumCollection}</p>}
        {object.museumID && <p><strong>Museum Accession ID:</strong> {object.museumID}</p>}
    </div>
    </>
)

Collection.propTypes = {
    object: PropTypes.object,
}

Collection.defaultProps = {
    object: [],
}
export default Collection
