const a: number = 5
let b = 'sfjls;djkf'
let c = true

//const d = a + c
let d: string[] = ['kdc2', 'asfdsahf', ]

let e: any = 4
e = 'skdhfalk'

function test(a: number): string | number {
	return a.toString()
}
console.log( test(777))

const test2 =(a: number): number => {
	return a*2
}

d = d.map((data):string => data.toLowerCase())
console.log(d)
const countCoore = (coord: number, long?: number) => {}

// void означает что фн ничего не вернет
const prontInt = (id: number | string): void => {
	//console.log(a.toUppercase())

	if(typeof id === 'number'){
		id.toString()
	} else if (typeof id === 'string'){
		id.toUpperCase()
	}
}

const getSum = (a: number | number[]) => {
	if(Array.isArray(a)){
	console.log(	a.toString())
	}
}

const z: undefined = undefined
const x: null = null