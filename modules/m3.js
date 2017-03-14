var m1 = require('./m1.js');
// var toDollar = require('./m2.js'); don't need m2 because they are already accessible through m1

function acctBal(){
  // console.log("m3 connection test");
 var randomNum = m1.random(100,100000);
 var makeDollar = m1.toDollar(randomNum);
 return makeDollar;
}

function acctText(){
  return "Account Balance: \n";
}
exports.acctBal = acctBal;
exports.acctText = acctText;
