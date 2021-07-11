
// const a = prompt('число')
// const b = prompt('число')

// let strFunc = (a, b) =>  {
//    return a - b
// };

let strFunc = (n, m) => {
	console.log( n ** m)
}

const a = [5]
const b = 10
strFunc(a, b)

// console.log(strFunc(10, 1))

// let sum = (x, n) => x + n;
// console.log(sum(3,3))


// const v = (a, b) => a + b * a;
// console.log(v(5,5)) 


// let getAge = prompt('Сколько вам лет?');

// let str = (getAge > 18) ?
//     () => console.log('hello') :
//     () => console.log('yoooo hello');
// str();

// let sum = (a, b) => {
//     let rezult = a + b;
//     return rezult;
// }
//  const x = sum(30, 70);
//  console.log(x)

// function asc(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// let asc = (qustion, yes, no) => confirm(qustion) ? yes() : no();

// asc(
//     'вопрос это первый параметр',
//     () => console.log('я второй параметр ты нажал yes вызвал функцияю true тоесть yes'),
//     () => console.log('я тертий параметр ты нажал отмена тооесть фолс  сработало else вызвал функцию no')
// )


//let a = [10]
 
//let str = () => {
//    let a = 14;
//    console.log(a)
//}

//str();
//console.log(a)

//let calcNum = () => a + b


//let a3 = a.map(s => s.length)
//console.dir(a3)

let leng = a.map(item => item.length)
console.log(leng)

function setNum(a) {
	let rez = 0
	if(a === 0){
		return 1
	} else{
		rez =	a * setNum(a -1)
	}
return rez
}

console.log(setNum(5))

const setNumbers = (a) => {
	let rez = a === 0 ? a = 1 : a * setNumbers(a -1) 
	return rez
}

console.log( setNumbers(3 ))

const dataUser = {
	firstName: 'Vladislav'
}

const showUser = () => {
	console.log(this.firstName)
}

showUser.bind(dataUser)
showUser()