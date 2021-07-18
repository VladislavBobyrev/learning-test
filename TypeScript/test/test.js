"use strict";
var a = 5;
var b = 'sfjls;djkf';
var c = true;
//const d = a + c
var d = ['kdc2', 'asfdsahf',];
var e = 4;
e = 'skdhfalk';
function test(a) {
    return a.toString();
}
console.log(test(777));
var test2 = function (a) {
    return a * 2;
};
d = d.map(function (data) { return data.toLowerCase(); });
console.log(d);
var countCoore = function (coord, long) { };
var prontInt = function (id) {
    //console.log(a.toUppercase())
    if (typeof id === 'number') {
        id.toString();
    }
    else if (typeof id === 'string') {
        id.toUpperCase();
    }
};
var getSum = function (a) {
    if (Array.isArray(a)) {
        console.log(a.toString());
    }
};
