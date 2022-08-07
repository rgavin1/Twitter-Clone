import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faCommentAlt, faHeart, faShareSquare } from '@fortawesome/free-regular-svg-icons';
import { Tweet } from "../../utils/types";

import Comment from "./Modals/Comment";

const Post: React.FC<{ post: Tweet }> = ({ post }) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal)
    return (
        <>
            <div className="feed__post" id={`post-id-${post.id}`}>
                <div className="feed__postimage" style={{ backgroundImage: `url(${post.image})` }}></div>
                <div className="feed__postdata">
                    <div className="feed__posttitle">
                        <span className="feed_username">{post.username}</span>
                        {post.isCertified && <span className="feed_certificate">
                            <FontAwesomeIcon icon={faCertificate} />
                        </span>}
                        <span className="feed_twitterhandle">{post.userhandle}</span>
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
                        <li title="Reply" onClick={toggleModal}><FontAwesomeIcon icon={faCommentAlt} /><span>{post.retweets}</span></li>
                        <li title="Retweet"><FontAwesomeIcon icon={faRetweet} /><span>{post.retweets}</span></li>
                        <li title="Like"><FontAwesomeIcon icon={faHeart} /><span>{post.likes}</span></li>
                        <li title="Share"><FontAwesomeIcon icon={faShareSquare} /></li>
                    </ul>
                    {/* Add Comment Section */}
                    <div>
                        <p>New Comment here - say something</p>
                        <ul className="feed__postmetadata">
                            <li title="Reply" onClick={toggleModal}><FontAwesomeIcon icon={faCommentAlt} /><span>{post.retweets}</span></li>
                            <li title="Retweet"><FontAwesomeIcon icon={faRetweet} /><span>{post.retweets}</span></li>
                            <li title="Like"><FontAwesomeIcon icon={faHeart} /><span>{post.likes}</span></li>
                            <li title="Share"><FontAwesomeIcon icon={faShareSquare} /></li>
                        </ul>
                    </div>
                </div>
            </div>
            {showModal && <Comment {...{ showModal, toggleModal }} />}
        </>
    );
};

export default Post;
