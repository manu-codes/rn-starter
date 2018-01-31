var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    var q = url.parse(req.url, true).query;

    console.log(q);
    if (q.username.toLowerCase() == 'admin' && q.password.toLowerCase() == 'admin') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        var user = { username: q.username, loggedInTime: new Date().toString() }
        setInterval(function () {
            res.end(JSON.stringify({ token: new Date().valueOf(), loginStatus: 1, user }));
        }, 1000)
    } else {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        setInterval(function () {
            res.end(JSON.stringify({ loginStatus: 0 }));
        }, 500)

    }

}).listen(8080, function () {
    console.log('mock server listening @ 8080')
});
