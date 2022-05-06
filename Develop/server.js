// EXTERNAL PACKAGES > FUNCTIONALITY OF SERVER
const express = require('express');
const path = require('path');
const fs = require('fs');

// PORT
const PORT = process.env.PORT || 3001;
const app = express();

// ROUTES
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// FUNCTION > REFERENCED THE 'ZOOKEEPER' LESSON
// DOCUMENTATION > EXPRESS.JS APP.USE FUNCTION (https://www.geeksforgeeks.org/express-js-app-use-function/)
// FUNCTION > CONNECTION TO HEROKU
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// ROUTES > APIROUTES
app.use('./api',apiRoutes);
app.use('/', htmlRoutes);

// PORT > LISTENING
app.listen(PORT,() => {
    console.log('API server is now on port ' + PORT + '!');
});