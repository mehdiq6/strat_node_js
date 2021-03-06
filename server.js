var http = require('http');
var module_time = require('./module_time');
var module_db = require('./module_db');
var url = require('url');
var fs = require('fs');
//req = request = درخواست کاربر
//res = responce   پاسخ کاربر 

http.createServer(function (req, res) {
    // res.write(module_time.getTime());

    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;

    fs.readFile('public/index.html', function(err, data) {
        // res.writeHead(200, {'Content-Type': 'text/html'});
        // res.write(data);
        // res.end();

      var q = url.parse(req.url, true);
      if(q.pathname == '/'){
        q.pathname = '/index.html';
      }

      if(q.pathname == '/getAllAds'){
        
        res.writeHead(200, {'Content-Type': 'application/json'});

        var data = module_db.getAllAds();
        console.log(data);
        if  (data.length == 5){
         
          module_db.addAds();
          data = module_db.getAllAds();
        }

        res.write(JSON.stringify(data));
        res.end();
        return;
      }

        var filename = "./public" + q.pathname;
        fs.readFile(filename, function(err, data) {
          if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
          } 
          res.writeHead(200, {'Content-Type': 'text/' + q.pathname.split('.').pop()});
          res.write(data);
          return res.end();
        });
      });


}).listen(8080); 
