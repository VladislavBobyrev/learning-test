"use strict";
// ================================================= типизация
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
// void означает что фн ничего не вернет
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
var z = undefined;
var x = null;
var pirnt = function (id) {
};
var q = function (point) {
    var s = point;
};
var myCanvas = document.querySelector('canvas');
var data = {
    'userId': 1,
    'id': 1,
    'title': 'hello my frend im title',
    'info': {
        'desc': 'my name',
        'isActive': true
    },
    'tags': [
        {
            'name': 'Vladislav',
            'value': 1000
        }
    ]
};
// =================================================== enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var calcEnum = function () {
    return 2;
};
var ruls;
(function (ruls) {
    ruls[ruls["one"] = 1] = "one";
    ruls[ruls["no"] = calcEnum()] = "no";
})(ruls || (ruls = {}));
var tes;
(function (tes) {
    tes[tes["A"] = 0] = "A";
    tes[tes["B"] = 1] = "B";
})(tes || (tes = {}));
var num = tes.A;
var numb = tes[num];
console.log(numb);
// =================================================== tuple
var typle = [33, 'hello', 77];
// ts понимает что это число методы для чисел
typle[0].toString();
// понимает что строка методы для строк
typle[1].toUpperCase();
// =================================================== Generic
//let generic<T> = (num: T): T => {
//	console.log(new Date())
//	return num
//}
//generic<number>(77)
function generic2(num) {
    console.log(new Date());
    return num;
}
generic2(2);
var logTimeStamp = function (num) {
    return num;
};
