const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html><body>');
        res.write('<head><title>Enter your message</title></head>');
        res.write('<form action="/message" method="POST"><input type=text name="message"><button>Send</button></form>');
        res.write('</body></html');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=');
            console.log(parsedBody);
            fs.writeFileSync('message.txt', message[1]);
        })
        res.writeHead(302, { 'Location': '/' });
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Node.js First Page</h1></body>');
    res.end();
});

server.listen(8000);