import axios from "axios";
import { Tweet } from "../utils/types";

const REQUEST_URL = "http://localhost:5000/posts";
const MOCKREQUESTBODY = {
    userid: "ef6c487d-61d3-4a2c-b268-dd59834d1e7b",
    username: "Ramsey",
    userhandle: "@Ramseyu90wr0fw2h",
    isCertified: true,
    post: "",
    retweets: 0,
    likes: 0,
    comments: 0,
    media: "video",
    image: "image",
    timestamp: ""
}





const getAllPosts = async (): Promise<Tweet[]> => {
    const { data: { data } } = await axios.get(REQUEST_URL);
    return data as Tweet[];
}

const createSinglePost = async (content: string): Promise<Tweet[]> => {
    const date = new Date();
    const requestBody = {
        ...MOCKREQUESTBODY,
        post: content,
        timestamp: date.getTime()
    }
    const { data } = await axios.post(REQUEST_URL, requestBody);
    return data;
}



export const postServices = {
    getAllPosts,
    createSinglePost
}