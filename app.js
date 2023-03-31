const express = require('express');
const logger = require('morgan');
const port = 3000;
  
const app = express();
app.use(logger('dev'));
  
app.get('/', (req, res) => {
  res.send('<h1>Front Page</h1>');
});
  
app.listen(port, () => {
  console.log(`Started at ${port}`);
});