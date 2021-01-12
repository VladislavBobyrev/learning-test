const people = [
    {userName: 'Vlad', age: 25, budget: 40000 }, // первый параметр в функции это обьект можем назваеть его любым именем в стрелочной функции
    {userName: 'Mary', age: 17, budget: 3400 },
    {userName: 'Саня', age: 49, budget: 50000 },
    {userName: 'Антаха', age: 29, budget: 1800 },
    {userName: 'Женя', age: 26, budget: 25000 },
    {userName: 'Валера', age: 24, budget: 23000 },
]

for (let i = 0; i < people.length; i++) { // es5 sintacsis
    console.log(people[i]);
    
}

for (let person of people) { for of //es6 sintaxis
    console.log(person);
    
}

// forEach ================================================================================================
people.forEach(function(person, index, pArr) {  //sintaxis es 5
// console.log(person);
// console.log(index);
console.log(pArr);    
}) 

people.forEach(person => console.log(person) ) // sintaxis es6 Если 1 пераметр записываем без скобок

//Map ======================================================================================================

let newPeople = people.map(person => `${person.userName} (${person.age})`) //   persom первый параметр который передаю в стрелочную функцию

console.log(newPeople);

newPeople = people.map(person => person.age * 3)
console.log(newPeople);


//filter ======================================================================================================
const adults = []

for (let i = 0; i < people.length; i++) { // Старая запись
    if(people[i].age >= 18) {
        adults.push(people[i])
    }
}
console.log(adults);

const adults = people.filter( person => person.age >= 18 )
console.log(adults);

// reduce ======================================================================================================

let amount = people.reduce( (nahalnyiIndex, person) =>  nahalnyiIndex + person.budget, 0)
for (let i = 0; i < people.length; i++) {
    amount += people[i].budget
}


console.log(amount);
 // Find ======================================================================================================
const vlad = people.find(person => person.userName === 'Vlad')
console.log(vlad);

// FindIndex ======================================================================================================
const vladIndex = people.findIndex(person => person.userName === 'Vlad')
console.log(vladIndex);

const newPeople = people 
    .filter( person => person.budget > 30000)
    .map(person => {
        return {
            Info: `${person.userName} ${person.age}`,
            budget: `${person.budget}`,
        }
    })

    console.log(newPeople);


    const redus = people
    .filter(person => person.budget > 1000)
    .map(person => {
        return {
        info: `${person.userName} (${person.age})`,
        budget: Math.sqrt(person.budget),
        }
    })
    .reduce((tatal, person) => tatal + person.budget , 0)
    console.log(redus);
