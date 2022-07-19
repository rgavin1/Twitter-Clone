import React from "react";
import NavItem from "./NavItem";
import { faHome, faHashtag, faBell, faBars, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';

const Nav: React.FC = () => {
  return (
    <div className="sidebar__nav">
      <NavItem text="Home" input={faHome} active={true} mobile={true} />
      <NavItem text="Explore" input={faHashtag} active={false} mobile={true} />
      <NavItem text="Notifications" input={faBell} active={false} mobile={true} />
      <NavItem text="Messages" input={faEnvelope} active={false} mobile={true} />
      <NavItem text="Bookmarks" input={faBookmark} active={false} mobile={false} />
      <NavItem text="Lists" input={faBars} active={false} mobile={false} />
      <NavItem text="Profile" input={faUser} active={false} mobile={false} />
      <NavItem text="More" input={faEllipsisH} active={false} mobile={false} />
    </div>
  );
};

export default Nav;
