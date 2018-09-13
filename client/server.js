// server.js
const express = require('express');
const app = express();

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/www'));

app.get('/*', function(req,res) {  
    res.sendFile(path.join(__dirname+'/www/index.html'));   
});  

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080, () => console.log("Listening on port ", process.env.PORT || 8080));