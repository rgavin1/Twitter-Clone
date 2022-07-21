const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

const mockdata = require('./mockdata.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to Twitter Clone API - built by Ramsey Gavin')
})

// Random Posts
app.get('/tweets', (req, res) => {
    res.send(mockdata)
})

app.post('/tweets', (req, res) => {
  console.log('req', req)
  res.send(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})