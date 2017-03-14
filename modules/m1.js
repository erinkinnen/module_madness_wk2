var toDollar = require('./m2.js');
var acctBal = require('./m3.js');
var acctText = require('./m3.js');
// console.log("test m1");
function random(min, max){
  // return Math.random() * (max - min) + min;
  return (Math.random() * max) + min;
}


// console.log(random);
exports.random = random;
exports.toDollar = toDollar;
exports.acctBal = acctBal;
exports.acctText = acctText;
