const http = require('http');
const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;
const app = new express();

app.get('/', function(req, res){
    // response.sendFile('C:/Users/DanK/Documents/GitHub/basicmarkup/index.html');
    app.use(express.static('C:/Users/DanK/Documents/GitHub/basicmarkup'));
    res.sendFile('C:/Users/DanK/Documents/GitHub/basicmarkup/index.html');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});