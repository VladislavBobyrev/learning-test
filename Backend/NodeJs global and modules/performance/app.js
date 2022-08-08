// измеряем performance в файле
function slow()
{
  performance.mark('start')

  const arr = []
  for (let i = 0; i < 100000; i++)
  {
    arr.push(i ** i)
  }
  performance.mark('stop')
  performance.measure('slow', 'start', 'stop')
  console.log(performance.getEntriesByName('slow'))
}
slow()

// измеряем performance через хук perf_hooks
const perf_hooks = require('perf_hooks')
const performanceObserver = new perf_hooks.PerformanceObserver((items, observer) =>
{
  console.log(items.getEntries())
  observer.disconnect()
})

test = perf_hooks.performance.timerify(test)
function test()
{
  const arr = []
  for (let i = 0; i < 100000; i++)
  {
    arr.push(i ** i)
  }
}
test()

performanceObserver.observe({entryTypes : ['measure','function']})
