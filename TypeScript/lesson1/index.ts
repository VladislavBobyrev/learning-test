//=========================  variable types
const num: number = 123
const str: string = 'Dubai'
const obj: object = {}
const numberArray: number[] = [1, 2, 3, 45,5]
const numberArray2: Array<number> = [3, 2, 3, 45,5]
const stringArray: string[] = ['Spain', 'China', 'Texas']
const bul: boolean = true

//========================== tuple
const contact: [string, number] = ['Vladislav', 12345]

//========================== any
let variabl: any = 48
variabl = []

//========================== naver
function noErr(message: string): never {
    throw new Error(message)
}

//========================== Create Type
type Login = string

const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = 'string'
//const id3: ID = true      err ID don,t boolean type

//const someType = string | null | undefined
