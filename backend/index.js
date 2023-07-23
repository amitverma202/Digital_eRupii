
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001; 

app.use(express.json());
app.use(cors()); 

app.get('/api/hello', (req, res) => {
  const response = { message: 'Hello world' };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});