import { useState, useEffect } from 'react'

import { Tweet } from '../utils/types';
import { postServices } from '../services/posts';

const useFetchPosts = () => {
    const [error, setError] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [tweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            try {
                const data = await postServices.getAllPosts();
                setTweets(data);
            } catch (e) {
                setError(e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    return { tweets, isLoading, error, setIsLoading }
}

export default useFetchPosts