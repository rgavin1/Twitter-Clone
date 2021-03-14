import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';

const Post = () => {
  return (
    <div className="feed__post">
      <div className="feed__postimage"></div>
      <div className="feed__postdata">
        <div className="feed__posttitle">
          <span className="feed_username">Ramsey</span>
          <span className="feed_certificate">
            <FontAwesomeIcon icon={faCertificate} />
          </span>
          <span className="feed_twitterhandle">@Ramseyu90wr0fw2h</span>
          <span className="feed_time">3h</span>
          <span className="feed_more">...</span>
        </div>
        <div className="feed__postcopy">
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqu.
        </div>
        <div className="feed__postmedia">
          <img
            src="https://i.guim.co.uk/img/media/ac2077e647fdb7e60e14a83a40a69021f5394ce1/0_138_4100_2460/master/4100.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=a938e28f47e9e5474722b732f3372b9e"
            alt=""
          />
        </div>
        <ul className="feed__postmetadata">
          <li title="Reply"><FontAwesomeIcon icon={faCommentAlt} /></li>
          <li title="Retweet"><FontAwesomeIcon icon={faRetweet} /></li>
          <li title="Like"><FontAwesomeIcon icon={faHeart} /></li>
          <li title="Share"><FontAwesomeIcon icon={faShareSquare} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
