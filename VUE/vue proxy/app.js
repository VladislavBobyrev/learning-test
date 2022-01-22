const App = Vue.createApp({
  data: () =>
  {
    return {
      
    }
  }
})

App.mount('#app')

// let title = 'create vue 3'
// let message = ` A im ${title}`

// console.log(message);

// title = 'progressive every day'

// console.log(message);


const data = {
  title: 'create vue 3',
  message: 'progressive every day and every night )'
}


const proxy = new Proxy(data, {
// сработает при чтении свойства  proxy.message
  get(target, p)
  {
    console.log(target);
    console.log(p);
  },
  // сработает при записи свойства  proxy.message = 'in home project'
  set(target, p, value, recived)
  {
  //   console.log(target);
  //   console.log(p);
  //   console.log(value);
  //   console.log(recived);

    if (p === 'title')
    {
      target.message = 'My project ' + value
    }
    target[p] = value
  }
})
// вызываем set
proxy.title = 'in home'
// вызываем get
// proxy.message

console.log(proxy);
console.log(data);
