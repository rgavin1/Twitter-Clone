import { v4 } from "uuid";
import createServer from './utils/createServer';
import twitterPostsServices from './dynamodb';

require("dotenv").config();

import mockdata from './mockdata.json';
// set-up server
const app = createServer();

// default path
app.get('/', (_req: any, res: any) => {
    res.send({ message: 'Welcome to Twitter Clone API - built by Ramsey Gavin' })
})

// Posts
app.get('/posts', (_req: any, res: any) => {
    res.send({ data: mockdata })
})

app.post('/posts', async (req: any, res: any) => {
    const postId = v4();
    const createdPost = {
        ...req.body,
        id: postId
    }
    try {
        await twitterPostsServices.addOrUpdatePost(createdPost)
        return res.status(201).send({ message: `Post created with id: ${postId}` })
    } catch (error) {
        console.log(error)
        return res.status(403).send({ message: `Post id: ${postId} was not created` })
    }
})

export default app;