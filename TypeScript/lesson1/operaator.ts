interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // name, | age

let myName: PersonKeys = 'name'
myName = 'age'
//myName = 'job'        err