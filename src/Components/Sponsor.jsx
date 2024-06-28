import React from 'react';
import PropTypes from "prop-types";
import '../utils/home.css'


const Sponsor = ({ svg, altText }) => {
    return (
        <div className="sponsor-container">
            <img src={svg} alt={altText} className="sponsor-svg" />
        </div>
    )
};

Sponsor.prototype = {
    svg: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired
}

export default Sponsor;
