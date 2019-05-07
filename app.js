const express = require('express');
const path = require('path');
let app = express();

let port = process.env.PORT || 3000;

// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.redirect("/");
});

app.listen(port, function () {
    console.log('webrtc-web listening on port = '+port);
});
