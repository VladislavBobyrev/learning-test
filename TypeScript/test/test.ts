// ================================================= типизация
const a: number = 5
let b = 'sfjls;djkf'
let c = true

//const d = a + c
let d: string[] = ['kdc2', 'asfdsahf',]

let e: any = 4
e = 'skdhfalk'

function test(a: number): string | number {
	return a.toString()
}
console.log(test(777))

const test2 = (a: number): number => {
	return a * 2
}

d = d.map((data): string => data.toLowerCase())
console.log(d)
const countCoore = (coord: number, long?: number) => { }

// void означает что фн ничего не вернет
const prontInt = (id: number | string): void => {
	//console.log(a.toUppercase())

	if (typeof id === 'number') {
		id.toString()
	} else if (typeof id === 'string') {
		id.toUpperCase()
	}
}

const getSum = (a: number | number[]) => {
	if (Array.isArray(a)) {
		console.log(a.toString())
	}
}

const z: undefined = undefined
const x: null = null

// ============================================= type and interfase
type test = {
	a: number,
	b: number
}

type D3Point = test & {
	z: string
}

interface Itest {
	a: number,
	b: number
}

interface d3Itest extends Itest {
	z: string
}

type strNum = string | number

const pirnt = (id: strNum) => {
	interface test {
		a: number
	}

	interface test {
		b: number
	}
}

const q = (point: Itest) => {
	const s: D3Point = point as D3Point
}

const myCanvas = document.querySelector('canvas') as HTMLCanvasElement

let data = {
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
}

//interface info {
//	desc: string,
//	isActive: boolean
//}

interface tag {
	name: string,
	value: number
}

interface Reply {
	userId: number,
	id: number,
	title: string
	//info: info,
	info: {
		desc: string,
		isActive: boolean
	},
	tags: tag[]
}

// =================================================== enums
enum Direction {
	Up,
	Down,
	left,
	right,
}

const calcEnum = () => {
	return 2
}	
enum ruls {
	one = 1,
	no = calcEnum()
}

enum tes {
	A,
	B
}

let num = tes.A
let numb = tes[num]
console.log(numb)

// =================================================== tuple

const typle: [number, string, number] = [33, 'hello', 77]
// ts понимает что это число методы для чисел
typle[0].toString()

// понимает что строка методы для строк
typle[1].toUpperCase()