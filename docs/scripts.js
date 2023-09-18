
const http = require('http');
const port = 3000;
const express = require('express');
const path = require('path');
const app = express();





app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send('Hello World!');
  });










app.listen(port, function(error) {
    if(error){
    console.log('Something went wrong', error)
} else {
    console.log('Server is listening on port ' + "http://localhost:" +port) 
}
})