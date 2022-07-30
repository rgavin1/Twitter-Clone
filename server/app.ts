import mockdata from './mockdata.json';
import uuid from "uuid";
import createServer from './utils/createServer';

// set-up server
const app = createServer();

// default path
app.get('/', (_req: any, res: any) => {
    res.json({ message: 'Welcome to Twitter Clone API - built by Ramsey Gavin' })
})

// Posts
app.get('/posts', (_req: any, res: any) => {
    res.status(200).json({ data: mockdata })
})

// app.post('/posts', (req: any, res: any) => {
//     const newPost = {
//         ...req.body,
//         id: uuid.v4(),
//         userid: uuid.v4(),
//     }
//     const updatedPosts = [newPost, ...mockdata];
//     // TODO: Create a database
//     res.status(201).json({ message: "Post created" })
// })

export default app;