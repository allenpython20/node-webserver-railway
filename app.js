
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.use( express.static('public') );

app.get('/', (req,res) =>{

    res.render('home',{
        nombre:'Allen',
        titulo : 'Curso de Node'
    })

})

app.get('/elements', (req,res) =>{

    res.render('elements',{
        nombre:'Allen',
        titulo : 'Curso de Node'
    })

})

app.get('/generic', (req,res) =>{

    res.render('generic',{
        nombre:'Allen',
        titulo : 'Curso de Node'
    })

})


// app.get('/generic', (req,res) =>{

//     res.sendFile(__dirname + '/public/generic.html');

// })

app.listen(port,() => {

})