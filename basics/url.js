let url = require('url');

var adress = 'http://localhost:8080/user.html?username=test10&dateofbirth=1998 february';
var q = url.parse(adress, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/user.html'
console.log(q.search); // returns '?username=test10&dateofbirth=1998 february'

let queryData = q.query;
console.log(queryData.username); 
console.log(queryData.dateofbirth)