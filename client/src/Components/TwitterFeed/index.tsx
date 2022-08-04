import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { Spinner } from '..';
import '../../assets/styles/Feed.css';

import StickyTop from '../StickyTop'
import Post from '../Post';
import TwitterTextarea from '../TwitterTextarea';
import { Tweet } from '../../utils/types';
import useFetchPosts from '../../hooks/useFetchPosts';


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