//  ?? eсли "а"  определено  то выведется а
//усли ан не определена выведится б

let user = 'Ivan'
console.log( user ?? 'anonim')

let a = null
let b = 'maru'
let c = null

console.log( a ?? b ?? c)

// Сравнение с ||
console.log( a || b || c)

//Важное различие между ними заключается в том, что:

// || возвращает первое истинное значение.
// ?? возвращает первое определённое значение.


let hend = 0;

console.log( hend || 100)
console.log( hend ?? 100)


heidth = null;
width = null;

let area = (heidth ?? 100) * (width ?? 50)

// 5000 выыедит 100 и 50 после умножит
// По соображениям безопасности JavaScript запрещает использование оператора ?? вместе с && и ||, если только приоритет явно не указан в круглых скобках.