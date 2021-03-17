import React from 'react';
import '../Assets/styles/Feed.css';
import StickyTop from './StickyTop';
import Post from './Post';
import TweetBox from './TweetBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

const Feed = ({ posts }) => {
    console.log(posts);
    return  <div className="feed" style={{ position: 'relative' }}>
                <StickyTop />
                <TweetBox />
                { posts.map(post => {
                    return <Post name={post.User} handle={post.Handle} certified={post.Certified} retweets={post.retweets} />
                }) }
                {/* Post */}
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <FontAwesomeIcon icon={faFeatherAlt} />
            </div>
}

export default Feed; 