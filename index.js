let http = Request('http');

http.createSever(function(req , res){
    res.writeHead(200,{'Coutent-Type':'text/html'});
    res.end('hello world');

}).listen(9000);