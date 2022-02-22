<template>
 <div class="container">
   <form class="card"   
    @submit.prevent='submitHandler'>
     <h2>Ankets Vue developer</h2>

     <!-- <div class="form-control" >
       <label for="name" >What is your name ?</label>
       <input 
        type="text"
        id='name'
        :class="{invalid: errors.name}"
        placeholder="Enter your name"
        v-model.trim="name"
       >
         <small 
          v-if="errors.name" 
          :class="{error: errors.name}"
          >
          {{errors.name}}
          </small>
     </div> -->
     <app-input
      placeholder="Enter your name"
      :error="errors.name"
      label=">What is your name ?"
  
     >

     </app-input>
     <div class="form-control">
       <label for="age">What is your old ?</label>
       <input 
       type="number" 
       id='age'
        placeholder="Enter your age" 
        max="70"
       v-model.number="age"
       >
     </div>

     <div class="form-control">
      <input 
      type="text" 
       placeholder="Where are your from ?" 
       list="sity" 
       v-model="sity"
       >
       <datalist  id='sity'>
         <option value="spb">St. Petersburg</option>
         <option value="msk">Moscow</option>
         <option selected value="bgd">Belgorod</option>
         <option value="kzn">Kazan</option>
         <option value="nsk">Novosibirsk</option>
       </datalist>     
     </div>

     <div class="form-checkbox">
       <span class="label">You ready go in Tokio ?</span>
       <div class="checkbox">
         <label>   <input type="radio" v-model="relocate" name="trip" value="yes">Yes</label>
       </div>
       <div class="checkbox">
         <label>   <input type="radio" v-model="relocate" name="trip" value="no">No</label>
       </div>
     </div>

     <div class="form-checkbox" 
  
     >
       <span class="label">Where are you know in Vue ?</span>
       <div class="checkbox">
         <label > <input type="checkbox" v-model="skils" name="skils" value="Vue 3">Vue 3</label>
       </div>
       <div class="checkbox">
         <label > <input type="checkbox" v-model="skils" name="skils" value="Router">Vue Router</label>
       </div>
       <div class="checkbox">
         <label > <input type="checkbox" v-model="skils" name="skils" value="CLI">Vue CLI</label>
       </div>    
     </div>
     <div class="form-checkbox" 
  
     >
       <span class="label">Rules our company</span>
       <div class="checkbox">
         <label > <input type="checkbox" v-model="agree">Rules agree</label>
       </div>   
     </div>

     <button type="submit" class="btn primary">POST</button>
   </form>
 </div>
</template>

<script>
import AppInput from "./AppInput.vue"
export default {
  
  data(){
    return{
      name: '',
      age: 23,
      sity: 'msk',
      relocate: null,
      skils: [],
      agree: false,
      errors: {
        name: null,
      }
    }
  },
  methods: {
    formIsValid() {
      let isValid = true
          if(this.name.length === 0){
            this.errors.name = 'incorrect name'
            isValid = false
          }
          else{
            this.errors.name = null
          }

          return isValid
        },
      submitHandler() {

            if(this.formIsValid()){
          console.log('submit')
          console.log('name', this.name)
          console.log('age', this.age)
          console.log('sity', this.sity)
          console.log('relocate', this.relocate)
          console.log('skils', this.skils)
          console.log('rules', this.agree)
        }
      }
  },
  components: {
    AppInput,
  }
}
</script>

<style scoped>
.error{
  color:  rgb(202, 16, 16);
  border: 2px solod red;
}
#app .container .card .form-control .invalid{
  border: 2px solid rgb(202, 16, 16);
  
}
</style>>
