var express = require('express');
var next = require('next');
var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev });
var handle = app.getRequestHandler();
app.prepare()
    .then(function () {
    var server = express();
    server.get('/p/:id', function (req, res) {
        var actualPage = '/post';
        var queryParams = { title: req.params.id };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('*', function (req, res) {
        return handle(req, res);
    });
    var port = 5000;
    server.listen(port, function (err) {
        if (err)
            throw err;
        console.log("> Ready on http://localhost:" + port);
    });
})["catch"](function (ex) {
    console.error(ex.stack);
    process.exit(1);
});
