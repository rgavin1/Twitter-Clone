import React from "react";
import '../assets/styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import Nav from './Nav';
import TwitterBtn from './TwitterBtn';
import Profile from './Profile';

const Sidebar = () => {
    return  <div className="sidebar">
                <div className="sidebar__containerleft">
                    <div className="sidebar__twittericon">                
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <Nav />
                    <TwitterBtn />
                </div>
                <div className="sidebar__containerright">
                    <Profile />
                </div>
            </div>
}

export default Sidebar;