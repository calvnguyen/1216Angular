var express = require('express'),
    path    = require('path'),
    app     = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

app.listen(8000, function() {
    console.log('1216Angular on port 8000');
})