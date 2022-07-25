import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from './';
import '../assets/styles/Feed.css';

import StickyTop from './StickyTop'
import Post from './Post';
import TweetBox from './TweetBox';
import { Tweet } from '../utils/types';


const Feed: React.FC = () => {
    const [tweets, setTweets] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    return <div className="feed" style={{ position: 'relative' }}>
        <StickyTop />
        <TweetBox {...{ setTweets, setIsLoading }} />
        {!isLoading ? tweets?.map((post: Tweet, i) =>
            <Post key={i} post={post} />
        ) : <Spinner />}
        <FontAwesomeIcon icon={faFeatherAlt} />
    </div>
}

export default Feed;