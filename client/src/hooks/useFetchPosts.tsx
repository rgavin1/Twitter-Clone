import { useState, useEffect } from 'react'

import { Tweet } from '../utils/types';
import { postServices } from '../services/posts';

const useFetchPosts = () => {
    const [tweets, setTweets] = useState<Tweet[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const refresh = async () => {
        setIsLoading(true);
        try {
            const data = await postServices.getAllPosts();
            setTweets(data);
        } catch (error) {
            console.log('error', error)
        }
        setIsLoading(false);
    }

    // FIXME: This is not working 
    // const createPost = async (rawPost: string) => {
    //     setIsLoading(true);
    //     try {
    //         const data = await postServices.createSinglePost(rawPost);
    //         setTweets(data);
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     setIsLoading(false);
    // }

    useEffect(() => {
        refresh();
    }, []);

    return { tweets, isLoading, setIsLoading, refresh }
}

export default useFetchPosts