<template>
  <form class="container" @submit.prevent="createPerson">
    <div class="card">
      <h2>Work in REST api</h2>

      <div class="form-control">
        <label for="name"></label>
        <input 
          type="text"
          id="name"
          v-model.trim="name"  
          >
      </div>

      <button class="btn primary"
        :disabled="name.length== 0 "

        >Save DataBase</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {  
    return{
      name: ''
    }
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
      console.log(fireBase)
      this.name = ''
    }
  }
}
</script>

<style>

</style>