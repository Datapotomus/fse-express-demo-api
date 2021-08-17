const express = require('express');
const app = express();
const port = 3030;

//Adding default route
app.get('/', (req, res) =>{
  res.send('You have reached the top-level route with a GET')
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})