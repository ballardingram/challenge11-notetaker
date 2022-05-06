// EXTERNAL PACKAGES > FUNCTIONALITY OF SERVER
const express = require('express');

// PORT
const PORT = process.env.PORT || 3001;
const app = express();

// ROUTES
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// FUNCTION > REFERENCED THE 'ZOOKEEPER' LESSON
app.use(Express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

// ROUTES > APIROUTES
app.use('./api',apiRoutes);
app.use('/', htmlRoutes);

// PORT > LISTENING
app.listen(PORT,() => {
    console.log('API server is now on port ${PORT}!');
});