const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.end(JSON.stringify({
        id: 1,
        name:'Sir Isaac Netwon',
    }));
        // res.writeHead(200, {
        //     'Content-Type': 'application/json',
        // });
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
});

server.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}...`);
}); 