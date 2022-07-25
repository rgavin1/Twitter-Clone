import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { Tweet } from "../utils/types";

const Post: React.FC<{ post: Tweet }> = ({ post }) => {
  return (
    <div className="feed__post">
      <div className="feed__postimage" style={{ backgroundImage: `url(${post.image})` }}></div>
      <div className="feed__postdata">
        <div className="feed__posttitle">
          <span className="feed_username">{post.name}</span>
          {post.isCertified && <span className="feed_certificate">
            <FontAwesomeIcon icon={faCertificate} />
          </span>}
          <span className="feed_twitterhandle">{post.handle}</span>
          <span className="feed_time">3h</span>
          <span className="feed_more">...</span>
        </div>
        <div className="feed__postcopy">{post.post}</div>
        <div className="feed__postmedia">
          <img
            src={`${post.media}`}
            alt=""
          />
        </div>
        <ul className="feed__postmetadata">
          <li title="Reply"><FontAwesomeIcon icon={faCommentAlt} /><span>{post.retweets}</span></li>
          <li title="Retweet"><FontAwesomeIcon icon={faRetweet} /><span>{post.retweets}</span></li>
          <li title="Like"><FontAwesomeIcon icon={faHeart} /><span>{post.likes}</span></li>
          <li title="Share"><FontAwesomeIcon icon={faShareSquare} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
