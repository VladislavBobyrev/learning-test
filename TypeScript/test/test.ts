// ================================================= типизация
const a: number = 5
let b = 'sfjls;djkf'
let c = true
let n: number[] = [1, 2, 3]
const a1: number = 5
const b1 = 'string'
let c1: boolean = false

//const d = a + c
let d1: string[] = ['str1', 'str2']
let d: string[] = ['kdc2', 'asfdsahf',]

let e: any = 4
e = 'skdhfalk'

let e1: any = 10
e1 = 'str1'

function test(a: number): string | number {
	return a.toString()
}
console.log(test(777))

function test1(a: number): string | number {
	return a.toString()
}
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

const print1 = (id:number = 0, str:string = 'tesla'): void => {
	console.log(`my id: ${id} my string: ${str}`)
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

type test2 = {
	a:number, 
	b:string, 
}

type aaa = test2 & {
	x: string
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
interface bg {
	color: string
}

const bgColour: bg = {
	color: 'red'
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

let avsver = {
	ansver: "valsislav",
	asc: '1234 lkajsdfljs  23 42j09 j '
}
interface Ansver extends Reply {
	ansver: string,
	asc: string
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


enum key {
	up,
	diwn
}
enum pasword {
	text,
}

let pasw = pasword.text


// =================================================== tuple

const typle: [number, string, number] = [33, 'hello', 77]
// ts понимает что это число методы для чисел
typle[0].toString()

// понимает что строка методы для строк
typle[1].toUpperCase()

const typl: [string, number, number] = ['sldfh', 44, 566]

const tp: [string, number] = ['hello', 22]

// =================================================== Generic

//let generic<T> = (num: T): T => {
//	console.log(new Date())
//	return num
//}

//=generic<number>(77)

function generic2<T>(num: T): T {
	console.log(new Date())
	return num

	interface generInterf {
		transform: <T, F> (a: T) => F
	}
}

generic2<number>(2)

interface timStamp {
	stamp: number
}

const logTimeStamp = <T extends timStamp>(num: T): T => {
	return num
}


const gen = <T, F>(str: T): T => {
	return str
}
const gena = <T, F>(num: T): T => {
	return num
}