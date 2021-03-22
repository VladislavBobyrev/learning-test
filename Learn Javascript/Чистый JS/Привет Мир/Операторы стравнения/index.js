// Операторы
/*
> <=
< >=

 результаты имеют true false */

console.log(1 > 2)
console.log(1 === 2)
console.log(1 != 2)

let rezult = 5 > 4
console.log(rezult)


console.log('a' > 'y')
console.log(true == 1)
console.log(false == 0)

//Оператор строгого сравнения === 

console.log(false === 0)

//Сравнение с null и undefined

console.log(null === undefined)
// значения различны так как различны их типы
console.log(null == undefined)
//Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.

console.log(null == 0)
console.log(null >= 0) //trur Исключение
console.log(null < 0)


console.log( undefined > 0 )
console.log( undefined >= 0 ) //Несравнееое знычение
console.log( undefined = 0 )

// Задача1
console.log(5 > 4) //true
console.log('Ананас' > 'Яблоко')//false
console.log('2' > '12') //false //ytue сравнивается посимвольно 2 больше 1 
console.log(undefined == null) //true
console.log(undefined === null) //false
console.log(null == "\n0\n") //false
console.log(null === +"\n0\n") //false



