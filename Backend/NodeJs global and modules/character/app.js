// используем подход commonJS
const { characters, stealRing } = require('./character.js') 

// при использовании require все что было импортированно пристваивается в conts
// для того чтобы изменять эти данные положим их в let
let myChars = characters
myChars = stealRing(myChars, 'Saroman')

for (const person of characters)
{
  console.log(person)
}