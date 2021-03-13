import React from 'react';
import '../Assets/styles/Feed.css';
import StickyTop from './StickyTop';
import Post from './Post';
import TweetBox from './TweetBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

const Feed = () => {
    return  <div className="feed" style={{ position: 'relative' }}>
                <StickyTop />
                <TweetBox />
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