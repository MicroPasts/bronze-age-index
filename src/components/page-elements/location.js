import React from 'react';
import PropTypes from 'prop-types';

const Location = ({object}) => (
    <>
        <h3>Location</h3>
        <ul className={"list-unstyled"}>
            {object.country && <li>Country: {object.country}</li>}
            {object.regionName && <li>Region: {object.regionName}</li>}
            {object.county && <li>County: {object.county}</li>}
            {object.district && <li>District: {object.district}</li>}
            {object.parish && <li>Parish: {object.parish}</li>}
            {object.knownas && <li>Known as: {object.knownas}</li>}
        </ul>
        {object.site && <p>BAI index card site transcribed as: {object.site}</p>}
        {object.gridRef && <p>Grid Reference: {object.gridRef}</p>}
        {object.toSearch && <p>MicroPasts contributors searched for: {object.toSearch}</p>}
    </>
);

Location.propTypes = {
    object: PropTypes.object.isRequired,
}

Location.defaultProps = {
    object: [],
}

export default Location