const cors = require("cors");
const express = require("express");
const uuid = require("uuid");

const app = express();
const port = 5000;

const mockdata = require('./mockdata.json');

app.use(cors());
// used in-place of body-parser
app.use(express.json());

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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})