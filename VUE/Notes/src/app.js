const App = {
  data()
  {
    return {
      title: 'Hello vue 3',
      plaсeholderString: 'введите текст заметки',
      inputValue: '',
      notes: [
        "Заметка 1"
      ]
    }

  },
  methods: {
    inputChengeHandler(event)
    {
      this.inputValue = event.target.value
     
    },
    addNewNotes()
    {
      console.log(this.notes) 
      this.notes.push(this.inputValue)
    }
  }

}

const app = Vue.createApp(App)
app.mount('#app')