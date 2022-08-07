// фазы EventLoop
-- инициализация

// nextTiick,  microtaskQueue 
--таймеры
// nextTiick,  microtaskQueue
--pendingn, callbakcs
// nextTiick,  microtaskQueue
--Idle, prepare
// nextTiick,  microtaskQueue
--pool
// nextTiick,  microtaskQueue
--check
// nextTiick,  microtaskQueue
--close, calback
// nextTiick,  microtaskQueue
-- проверка на окончание



// const start = performance.now()

// setTimeout(() =>
// {
//   console.log(performance.now() - start)
//   console.log('Прошла секунда')
// }, 1000)

// const myFunction = (arg) => console.log(`Аргумент => ${arg}`)

// setTimeout(myFunction, 1000, 'Топ')

// const timerId = setTimeout(() =>
// {
//   console.log('БУУУМ')
// }, 3000)

// setTimeout(() => clearTimeout(timerId), 1000)

console.log('Перед')

setImmediate(() => console.log('После всего'))

console.log('После')

setTimeout(() =>
{
  for (let i = 0; i < 10000000; i++){ }
  console.log('Done')
  Promise.resolve().then(() => console.log('Promise in timeout'))
  process.nextTick(() => console.log('Tick'))
})

Promise.resolve().then(() => console.log('Promise'))