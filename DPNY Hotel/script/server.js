const express = require('express');
const app = express();

const routie = require('./routie');
const path = require('path');

app.use(express.urlencoded({extended : true}));
app.set('views', path.resolve(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(routie);

app.listen(3000, (req, res)=>{
    console.log("The Server Is Alredy Wrking!!")
})