import React from 'react';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Profile = () => {
    return  <div className="sidebar__profile">
                <div className="sidebar__img"></div>
                
                <div className="sidebar__meta">
                    <div className="sidebar__name">Ramsey</div>
                    <div>@Ramseyu90wr0fw2h</div>
                </div>

                <div className="sidebar__more">
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div>
}


export default Profile;