var number = 0;

function toDollar(initial){
dollarVersion = ("$" + parseFloat(initial.toFixed(2)).toLocaleString());
return dollarVersion;
}

module.exports = toDollar;
