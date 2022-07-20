const express = require("express");
const app = express();
const port = 5000;

const mockdata = require('./mockdata.json');

app.get('/', (req, res) => {
  res.send('Hello World!')
})



// Posts
app.get('/tweets', (req, res) => {
    res.send(mockdata)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})