
var express = require('express');
var httpProxy = require('http-proxy');

var apiForwardingUrl = 'https://domandj-server.herokuapp.com/';

const port = process.env.PORT || '5000';


// Solution for forwarding from http to https taken from:
// http://stackoverflow.com/questions/15801014/how-to-use-node-http-proxy-for-http-to-https-routing
var proxyOptions = {
    changeOrigin: true
};

httpProxy.prototype.onError = function (err) {
    console.log(err);
};

var apiProxy = httpProxy.createProxyServer(proxyOptions);

console.log('Forwarding API requests to ' + apiForwardingUrl);

// Node express server setup.
var server = express();
server.set('port', port);
server.use(express.static(__dirname + '/dist'));

function forceHttps(req, res, next){
    if (!req.secure) {
      res.redirect('https://' + req.headers.host + req.url);
    }else {
      return next();
    }
};

server.all("*", function(req, res) {
    apiProxy.web(req, res, {target: apiForwardingUrl});
}).all("*", forceHttps);
   

// Start Server.
server.listen(server.get('port'), function() {
    console.log('Express server listening on port ' + server.get('port'));
});


//--- version initiale ----

// var express = require('express');
// var app = express();
// var path = require('path');

// const port = process.env.PORT || '5000';

// app.set('port', port);
// app.use(express.static(__dirname + '/dist'));
// app.get('/*', function(req, res) {
//     res.set('Content-Type', 'text/html')
//         .sendFile(path.join(__dirname + '/dist/index.html'));
// })

// app.listen(app.get('port'), function() {
//     console.log('Console listening on port : ' + app.get('port'));
// });
