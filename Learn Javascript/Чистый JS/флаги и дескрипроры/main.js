const dataUser = {
	userName: 'Valdislav',
	age: 25,
}

//let descriptor = Object.getOwnPropertyDescriptor(dataUser,'userName');


//console.log(JSON.stringify(descriptor, null, 2))

let user = {}

Object.defineProperty(user, 'name',{
	value: 'Vladislav'
})

let descr = Object.getOwnPropertyDescriptor(user, 'name')
console.log(JSON.stringify(descr, null, 2))

// ================ сделалем доступ толькоо  для чтения 
Object.defineProperty(dataUser, 'userName', {
	writable: false
})

 dataUser.userName = 'Musk'
 // значени ене меняется !!
console.log( dataUser.userName )
