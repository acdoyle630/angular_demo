/*jshint esversion: 6*/


const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;

app.use('/public', express.static('./public'));

app.get('/', (req,res) =>{
  res.sendFile('index.html', { root: './'});
});

app.listen(PORT, () =>{
  console.log(`listening on port: ${PORT}`);
});