const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const index = require('./Controller/Routes');
const passport = require('passport');
const flash = require('flash');


app.use(passport.initialize());
app.use(passport.session());
//app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


module.exports = app;