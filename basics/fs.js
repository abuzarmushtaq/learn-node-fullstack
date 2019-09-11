let fs = require('fs');
// let http = require('http');


/*
Create/Update files
*/

// fs.writeFile('dummy.txt', 'Hello World!', (err, file) => {
//     if (err) throw err;
//     console.log('Saved');
// });


/*
Append data into files
*/

// fs.appendFile('dummy.txt', ' This is new next!', (err) => {
//     if (err) throw err;
//     console.log('Updated!');
// });


/*
Delete files
*/

// fs.unlink('dummy.txt',  (err) => {
//     if (err) throw err;
//     console.log('File deleted');
// });


/*
Rename files
*/

// fs.rename('dummy.txt', 'demo.txt', (err) => {
//     if (err) throw err;
//     console.log('File Renamed');
// });




/*
 Simple Server
*/

// let server = http.createServer((req, res) => {
//     fs.readFile('index.html', function (err, data) {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write(data);
//         res.end();
//     });
// })

// server.listen(8080);
