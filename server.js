var express   =     require("express");
var app       =     express();
var http = require('http').Server(app);
// var server = http.createServer(app);
app.use(express.static(__dirname + '/static'));
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html'); 
    console.log('go');
});

http.listen(app.get('port'), app.get('ip'), function () {
    console.log('Listening on port ' + app.get('port'));
});
//... More code