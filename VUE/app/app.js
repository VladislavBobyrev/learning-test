const App = {
  data()
  {
    return {
      placeholderString: 'введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: [
        'заметка 1',
        'заметка 2',
        'прошел 10 урок'
      ]
    }
  },
  methods: {
    inputCangeHandler(event)
    {
      this.inputValue = event.target.value
    },
    addNewNotes()
    {
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    deleteNotise()
    {
      this.notes.pop(this.notes)
    }
  }
}


const app = Vue.createApp(App)
app.mount('#app')