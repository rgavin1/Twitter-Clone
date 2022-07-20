import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/Feed.css';

import StickyTop from './StickyTop'
import Post from './Post';
import TweetBox from './TweetBox';
import { Tweet } from '../utils/types';

import { Spinner, Container } from 'react-bootstrap';

export const BootStrapSpinner = () => {
    return (
        <Container>
            <Spinner animation="border" variant="info" />
        </Container>
    );
}


const Feed: React.FC = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    // const [tweets, setTweets] = useState<Tweet[]>([]);

    React.useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                // const response = await axios.get("localhost:5000/tweets");
                // console.log('response', response);
            } catch (error) {
                console.log('error', error)
            } finally {
                setIsLoading(false);
            }
        })()
    })

    return <div className="feed" style={{ position: 'relative' }}>
        <StickyTop />
        <TweetBox {...{ setTweets }} />
        {isLoading ? tweets.map((post: Tweet, i) => {
            return <Post key={i} name={post?.name} handle={post.handle} certified={post.certified} copy={post.copy} retweets={post.retweets} likes={post.likes} comments={post.comments} media={post.media} />
        }) : <BootStrapSpinner />}
        <FontAwesomeIcon icon={faFeatherAlt} />
    </div>
}

export default Feed;