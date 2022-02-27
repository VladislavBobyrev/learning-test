<template>
  <form class="container" @submit.prevent="createPerson">
    <app-alert :alert="alert" @close="alert === null"></app-alert>
    <div class="card">
      <h2>Work in REST api</h2>

      <div class="form-control">
        <label for="name"></label>
        <input 
          type="text"
          id="name"
          v-model.trim="name">
      </div>

      <button class="btn primary"
        :disabled="name.length == 0"
        @click="createPerson"
        >Save DataBase</button>
    </div>
  </form>
   <app-loading v-if="loading"></app-loading>
   <app-people-list
    v-else
    :people="people"
    @load="loadPeople"
    @remove="removePeople">
   </app-people-list>
</template>

<script>
import AppPeopleList from './components/AppPeopleList.vue';
import axios from 'axios';
import AppAlert from './components/AppAlert.vue'
import AppLoading from './components/AppLoading.vue'

export default {
  props: ['load', 'remove'],
  data() {  
    return{
      name: '',
      people: [],
      alert: null,
      loading: false,
    }
  },
  mounted(){
    this.loadPeople()
  },
  methods:{
  /**
   Метод принимает данные из формы для загрузки в БД
  * @method createPerson
  * @param    {string} Name    Имя клиента
  * @async
  * */
   async createPerson(){
      // https://vue3-rest-api-default-rtdb.firebaseio.com/people.json
      // this.name
      const respons = await fetch('https://vue3-rest-api-default-rtdb.firebaseio.com/people.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify({
          firstName: this.name
        })        
      })
      const fireBase = await respons.json()
      this.people.push({
        firstName:this.name,
        id: fireBase.name,
      })
      this.name = ''
    },
    /**метод загружает список из БД 
     * @method loadPeople
     * @async
    */
    async loadPeople(){
      try{
       this.loading = true
       const {data} = await axios.get('https://vue3-rest-api-default-rtdb.firebaseio.com/people.json')
       if(!data){
         throw new Error('Список людей пуст')
       }
       this.people = Object.keys(data).map(key => {
          return {
          id: key,
          ...data[key]
          }
        })
        this.loading = false
      } catch(e){
        this.loading = false
        this.alert = {
          type: 'danger',
          title: 'ошибка',
          text: e.message,
        }
        console.log(e.message)
      }
 
   },
   /**метод удаляет элемент по id
    * @method 
    * @async
    * @param {string} id
    */
   async removePeople(id){
    try{
      const personName = this.people.find(person => person.id === id).firstName
      await axios.delete(`https://vue3-rest-api-default-rtdb.firebaseio.com/people/${id}.json`)
      this.people = this.people.filter(person => person.id !== id)
      this.alert = {
      type: 'primary',
      title: 'Успешно !',
      text: `Пользователь с именем ${personName} удален`
      }
    } catch(e){
       console.log("removePeople error :", e.message)
    }
       }
  },
  components:{
    AppPeopleList,
    AppAlert,
    AppLoading,
        }
}
</script>

<style>

</style>