var express = require('express');
var app = express();
var path = require('path');

const port = process.env.PORT || '5000';

app.set('port', port);
app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
    res.set('Content-Type', 'text/html')
        .sendFile(path.join(__dirname + '/dist/index.html'));
})

app.listen(app.get('port'), function() {
    console.log('Console listening on port : ' + app.get('port'));
});
