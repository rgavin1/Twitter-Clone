import React from 'react';
import '../Assets/styles/Feed.css';
import StickyTop from './StickyTop';
import Post from './Post';
import TweetBox from './TweetBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

const Feed: React.FC<{ posts: any[] }> = ({ posts }) => {
    return <div className="feed" style={{ position: 'relative' }}>
        <StickyTop />
        <TweetBox />
        {posts.map((post: any) => {
            return <Post name={post.User} handle={post.Handle} certified={post.Certified} copy={post.copy} retweets={post.retweets} likes={post.likes} comments={post.comments} media={post.media} />
        })}
        <FontAwesomeIcon icon={faFeatherAlt} />
    </div>
}

export default Feed;