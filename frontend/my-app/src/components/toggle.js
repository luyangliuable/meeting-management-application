import React, { useState } from 'react';
import PropTypes from 'prop-types';



const ToggleButton = () => {
    return(
            <div className="wrg-toggle">
            <div className="wrg-toggle-container">
            <div className="wrg-toggle-check">
            <span>|</span>
            </div>
            <div className="wrg-toggle-uncheck">
            <span>O</span>
            </div>
            </div>
            <div className="wrg-toggle-circle"></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
            </div>
    )
}

export default ToggleButton;

