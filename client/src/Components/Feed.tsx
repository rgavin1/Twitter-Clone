import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/Feed.css';

import StickyTop from './StickyTop'
import Post from './Post';
import TweetBox from './TweetBox';
import { Tweet } from '../utils/types';

const Feed: React.FC = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    return <div className="feed" style={{ position: 'relative' }}>
        <StickyTop />
        <TweetBox {...{ tweets, setTweets }} />
        {tweets.map((post: Tweet) => {
            return <Post name={post.name} handle={post.handle} certified={post.certified} copy={post.copy} retweets={post.retweets} likes={post.likes} comments={post.comments} media={post.media} />
        })}
        <FontAwesomeIcon icon={faFeatherAlt} />
    </div>
}

export default Feed;