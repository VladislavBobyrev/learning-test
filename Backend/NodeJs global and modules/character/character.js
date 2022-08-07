// массив с персонажами и характеристиками
let characters = [
  { name:'Frodo', hasRing: false},
  { name:'Bilbo', hasRing: false},
  { name:'Smagl', hasRing: false},
  { name:'Saroman', hasRing: false},
]

/**
 * Присваиваем кольцо персонажу
 * @param {Array} characters характеристики персонажей
 * @param {*} owner персонаж которому передаем кольцо
 * @returns измененный массив
 */
function stealRing(characters, owner) {
 return characters.map(person =>
  {
    if (person.name === owner)
    {
      person.hasRing = true
    } else
    {
      person.hasRing = false
    }
  })
}

module.exports = { stealRing, characters }