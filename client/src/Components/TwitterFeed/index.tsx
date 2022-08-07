import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Spinner } from '..';
import '../../assets/styles/Feed.css';
import useFetchPosts from '../../hooks/useFetchPosts';
import { Tweet } from '../../utils/types';
import Post from '../Post';
import StickyTop from '../StickyTop';
import TwitterTextarea from '../TweetTextarea';


const Feed: React.FC = () => {
    const { tweets, isLoading } = useFetchPosts()
    return <div className="feed" style={{ position: 'relative' }}>
        <StickyTop />
        <TwitterTextarea />
        {!isLoading ? tweets.map((post: Tweet, i) =>
            <Post key={i} post={post} />
        ) : <Spinner />}
        <FontAwesomeIcon icon={faFeatherAlt} />
    </div>
}

export default Feed;