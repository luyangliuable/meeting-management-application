import React, { useState } from 'react';
import PropTypes from 'prop-types';



const ToggleButton = () => {

    const [toggle, setToggle] = useState(false);

    const triggerToggle = () => {
        setToggle( !toggle )
    }


    return(
            <div className="wrg-toggle">
            <div className="wrg-toggle-container">
            <div className="wrg-toggle-check">
            <span>I</span>
            </div>
            <div className="wrg-toggle-uncheck">
            <span>O</span>
            </div>
            </div>
              <div onClick={ triggerToggle } className={ toggle ? 'on' : 'off' }></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
            </div>
    )
}

export default ToggleButton;

