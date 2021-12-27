const App = {
  data()
  {
    return {
      placeholderString: 'введите название заметки',
      title: 'Список заметок',
      html: `<h1>Vue 3</h1>`,
      inputValue: '',
      notes: [
        'заметка 1',
        'заметка 2',
        'прошел 14 урок'
      ]
    }
  },
  methods: {
    inputCangeHandler(event)
    {
      this.inputValue = event.target.value
    },
    toUpperCase(item)
    {
     return item.toUpperCase()
    },
    addNewNotes()
    {
      if (this.inputValue !== '')
      {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }

    },
    deleteNotise(index)
    {
      this.notes.splice(index , 1)
    },
    boubliCount()
    {
      console.log('doubleCount')
     return  this.notes.length * 2
    }
  },
  /**
   * computed должен обязательно чтото возвращать
   */
  computed: {

    dobleCountComputed()
    {
      console.log('bodleComputed')
      return this.notes.length * 2
    }
  },
  watch:  {
    inputValue(value)
    {
      console.log(`  input vlaue ${value}`)
    }
  }
}


const app = Vue.createApp(App)
app.mount('#app')