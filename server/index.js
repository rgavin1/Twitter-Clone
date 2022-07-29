import app from './app';
import { PORT } from './constants';
const mockdata = require('./mockdata.json');

app.get('/', (req, res) => {
  res.send('Welcome to Twitter Clone API - built by Ramsey Gavin')
})

// Posts
app.get('/posts', (req, res) => {
    res.send(mockdata)
})

app.post('/posts', (req, res) => {
  const newPost = {
    ...req.body,
    id: uuid.v4(),
    userid: uuid.v4(),
  }
  const updatedPosts = [newPost, ...mockdata];
  // TODO: Create a database
  res.status(201).json({ message: "Post created" })
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})