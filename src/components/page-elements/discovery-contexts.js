import React from "react"
import {startCase} from "lodash";
import PropTypes from "prop-types"
import {Badge} from "react-bootstrap";

const DiscoveryContexts = ({object}) => (

    <>
        {object.discoveryContext &&
            <Badge bg="dark" className={"my-2 p-2 rounded-0"}>Discovery
                Contexts: {startCase(object.discoveryContext)}</Badge>
        }
    </>
)

DiscoveryContexts.propTypes = {
    object: PropTypes.object.isRequired
}

DiscoveryContexts.defaultProps = {
    object: [],
}

export default DiscoveryContexts;