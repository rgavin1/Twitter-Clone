import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';

const Post: React.FC<{ name: any, handle: any, certified: any, copy: any, retweets: any, likes: any, comments: any, media: any }> = ({ name, handle, certified, copy, retweets, likes, comments, media }) => {
  return (
    <div className="feed__post">
      <div className="feed__postimage"></div>
      <div className="feed__postdata">
        <div className="feed__posttitle">
          <span className="feed_username">{name}</span>
          {certified && <span className="feed_certificate">
            <FontAwesomeIcon icon={faCertificate} />
          </span>}
          <span className="feed_twitterhandle">{handle}</span>
          <span className="feed_time">3h</span>
          <span className="feed_more">...</span>
        </div>
        <div className="feed__postcopy">{copy}</div>
        <div className="feed__postmedia">
          <img
            src={`${media}`}
            alt=""
          />
        </div>
        <ul className="feed__postmetadata">
          <li title="Reply"><FontAwesomeIcon icon={faCommentAlt} /><span>{retweets}</span></li>
          <li title="Retweet"><FontAwesomeIcon icon={faRetweet} /><span>{retweets}</span></li>
          <li title="Like"><FontAwesomeIcon icon={faHeart} /><span>{likes}</span></li>
          <li title="Share"><FontAwesomeIcon icon={faShareSquare} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
