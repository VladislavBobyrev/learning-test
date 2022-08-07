const EventEmitter = require('events')
const myEmmiter = new EventEmitter()

const logDbConnection = () =>
{
  console.log('DB connected...')
}

// дбавили обработчик события
myEmmiter.addListener('connected', logDbConnection)
// вызвали событие
myEmmiter.emit('connected')

// удалили обработчик события
myEmmiter.removeListener('connected', logDbConnection)// вызвали событие
myEmmiter.emit('connected')

myEmmiter.on('msg', (data) =>
{
  console.log(`Получили : ${data}`)
})
myEmmiter.emit('msg', 'Привет! Я получил сообщение )')

// добавляем в  начало через prependListener
myEmmiter.prependListener('msg', () =>
{
  console.log('I am one message')
})


myEmmiter.once('off', () => console.log('Вызвался 1 раз'))
myEmmiter.emit('off')
myEmmiter.emit('off')
myEmmiter.emit('msg')
console.log(myEmmiter.getMaxListeners())
// myEmmiter.setMaxListeners(1)
// console.log(myEmmiter.getMaxListeners())
myEmmiter.listenerCount('off')
myEmmiter.listenerCount('msg')
console.log(myEmmiter.eventNames())

// Обработка ошибок
myEmmiter.on('error', (err) =>
{
   console.log(`Произошла ошибка ${err.message}`)
})

myEmmiter.emit('error', new Error('BOOM'))

// Подключение таргет
const target = new EventTarget()
const logTarget = () =>
{
  console.log('my target started...')
}
target.addEventListener('connected', logTarget)
target.dispatchEvent(new Event('connected'))