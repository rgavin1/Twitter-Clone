import React from 'react';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StickyTop = () => {
    return  <div className="feed__stickytop">
                <h1>Home</h1>
                <FontAwesomeIcon icon={faStar} />
            </div>;
}

export default StickyTop; 