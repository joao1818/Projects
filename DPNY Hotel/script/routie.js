const express = require('express');
const routie = express.Router();
const formController = require('./formController');

routie.get("/", formController.formPage);
routie.post("/check", formController.formMessage);


module.exports = routie;







