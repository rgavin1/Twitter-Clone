import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavItem = ({ text, input, active, mobile }) => {
    return  <div className={ `sidebar__navitem ${ active ? "sidebar__navitem--active" : "" } ${ !(mobile) ? "hide-icon" : "" }` }>
             <span><FontAwesomeIcon icon={input} /></span>
             <span className="sidebar__navtext">{text}</span>
            </div>
} 

export default NavItem;