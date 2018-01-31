var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (q.username == 'admin' && q.password == 'admin') {
        res.end(JSON.stringify({ token: new Date().valueOf(), loginStatus: 1 }));
    } else {
        res.end(JSON.stringify({ loginStatus: 0 }));
    }

}).listen(8080, function () {
    console.log('mock server listening @ 8080')
});
