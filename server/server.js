// server.js
const express = require('express');
const path = require('path');
const app = express();

// Here we will serve some routes
app.use(express.static('../client/www'));

app.get('/*', function(req,res) {  
    res.sendFile(path.join('../client/www/index.html'));   
});  

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080, () => console.log("Listening on port ", process.env.PORT || 8080));