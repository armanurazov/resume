const PORT = 8080;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', (req, res) =>{
    res.sendFile(__dirname + '/about.html');
})

app.get('/education', (req, res) =>{
    res.sendFile(__dirname + '/education.html');
})

app.get('/work', (req, res) =>{
    res.sendFile(__dirname + '/work.html');
})

app.get('/contact', (req, res) =>{
    res.sendFile(__dirname + '/contact.html');
})

app.listen(process.env.PORT || PORT, console.log('Connected to ' + PORT));