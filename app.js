var http = require('http');
var m1 = require ('./modules/m1.js');
var m3 = require ('./modules/m3.js');

http.createServer(function(request, response){
  // var randomNum = m1.random(100,100000);
  // console.log(randomNum);
  // var makeDollar = m1.toDollar(275346.3698787);
  // console.log(makeDollar);
  var text = m3.acctText();
  var bal = m3.acctBal();

  response.writeHead(200);
  response.write(text);
  response.write(bal);
  // response.write(acctBal);
  response.end();
}).listen(8000);
console.log("have at it!");
