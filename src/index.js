const express = require('express');
const BullService = require('./services/bullService');

const app = express();
const port = process.env.PORT || 3000;

const bullService = new BullService('hello-world');

app.get('/enqueue', async (req, res) => {
  await bullService.enqueueHelloJob({ text: 'Hello, World!' });
  res.send('Job enqueued!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
